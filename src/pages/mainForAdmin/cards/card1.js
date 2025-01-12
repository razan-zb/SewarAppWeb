import React, { useState, useEffect } from 'react';
import * as S from './cardStyle';
import moment from 'moment';
import TaskModal from './sections/addingTaskModel';
import { fetchTasksData, featchCreateTask, fetchDeleteTask, fetchUpdateTask } from '../../../helpers/api';
import { useTranslation } from 'react-i18next';
import { FaPlus } from 'react-icons/fa';
import Calendar from 'react-calendar';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

const Card1 = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [tasks, setTasks] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [notificationTriggerTime, setNotificationTriggerTime] = useState(new Date());
  const [notificationTriggerShow, setNotificationTriggerShow] = useState('');
  const [startTime, setStartTime] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setStartTime(moment.utc(`${selectedDate} ${startHour}`, 'YYYY-MM-DD HH:mm').toDate());
  }, [endHour, selectedDate, startHour]);

  const transformTasksData = (tasks1) => {
    return tasks1.reduce((acc, task) => {
      const date = moment(task.date).format('YYYY-MM-DD');
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push({
        title: task.description,
        startHour: moment.utc(task.startTime).format('HH:mm'),
        endHour: moment.utc(task.endTime).format('HH:mm'),
        id: task._id,
        notificationTriggerShow: task.notificationTriggerShow,
      });
      return acc;
    }, {});
  };

  
  const fetchData = async () => {
    try {
      const tasks1 = await fetchTasksData('1234567890');
      const transformedTasks = transformTasksData(tasks1);
      setTasks(transformedTasks);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CreateTask = async () => {
    try {
      const newTask = await featchCreateTask(
        taskTitle,
        selectedDate,
        startHour,
        endHour,
        '1234567890',
        notificationTriggerTime,
        notificationTriggerShow,
        notificationTriggerShow !== 'none'
      );
      if (newTask) {
        fetchData();
        const updatedTasks = { ...tasks };
        if (!updatedTasks[selectedDate]) {
          updatedTasks[selectedDate] = [];
        }

        updatedTasks[selectedDate].push({
          title: taskTitle,
          startHour,
          endHour,
          notificationTriggerShow,
        });
        setModalVisible(false);
        setTaskTitle('');
        setStartHour('');
        setEndHour('');
        setNotificationTriggerShow('none');
      } else {
        alert(t('taskCreationFailed'));
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const addTask = () => {
    if (taskTitle.trim() && startHour.trim() && endHour.trim()) {
      CreateTask();
    } else {
      setTaskTitle('');
      setStartHour('');
      setEndHour('');
      setModalVisible(false);
      setNotificationTriggerShow("none");
      
    }
  };

  const updateTaskById = async () => {
    try {
      const updatedTask = {
        description: taskTitle,
        startTime: new Date(`${selectedDate}T${startHour}:00.000Z`),
        endTime: new Date(`${selectedDate}T${endHour}:00.000Z`),
        _id: taskToEdit.id,
        date: new Date(selectedDate),
        notificationTriggerShow,
        notificationTriggerTime,
      };
      await fetchUpdateTask(taskToEdit.id, updatedTask);
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const updateTask = () => {
    updateTaskById();
    fetchData();
    const updatedTasks = { ...tasks };
    const taskIndex = updatedTasks[selectedDate].findIndex(
      task => task === taskToEdit
    );
    
    if (taskIndex !== -1) {
    
      updatedTasks[selectedDate][taskIndex] = {
        title: taskTitle,
        startHour,
        endHour,
        id:taskToEdit.id,
        notificationTriggerShow:notificationTriggerShow,
        notificationTriggerTime:notificationTriggerTime,
        date: new Date(selectedDate)
      };
      setTasks(updatedTasks);
      setTaskTitle('');
      setStartHour('');
      setEndHour('');
      setModalVisible(false);
      setIsEditing(false);
      setTaskToEdit(null);
      setNotificationTriggerShow("none")
    }
  };

  const deleteTaskById = async (taskId) => {
    try {
      await fetchDeleteTask(taskId);
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(moment(date).format('YYYY-MM-DD'));
  };

  const deleteTask = () => {

    if(deleteTaskById(taskToEdit.id)){

      navigator(`/mainForAdmin/cards/card1`);
      setTaskTitle('');
      setStartHour('');
      setEndHour('');
      setModalVisible(false);
      setIsEditing(false);
      setTaskToEdit(null);
      setNotificationTriggerShow("none");
    }
    
  };

  const convertTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + (minutes || 0);
  };
  
  const onTaskPress = (task) => {
    setTaskTitle(task.title);
    setStartHour(task.startHour);
    setEndHour(task.endHour);
    setTaskToEdit(task);
    setIsEditing(true);
    setModalVisible(true);
  };

  const markedDates = Object.keys(tasks).reduce((acc, date) => {
    acc[date] = {
      marked: true, // Ensures the date is marked
      dots: [{ color: '#73224B' }], // Adds a dot
    };
    return acc;
  }, {});

  // Highlight the selected date
  markedDates[selectedDate] = {
    ...markedDates[selectedDate],
    selected: true,
    selectedColor: '#73224B', // Highlight the background color of selected day
    dotColor: '#ffffff', // Color of dot on selected date
  };





  return (
    <S.Container2>
      <S.TopContainer>
        <FaArrowLeft onClick={() => navigate(-1)}  />
      </S.TopContainer>
      <S.CalendarContainer>
      <Calendar
        onChange={handleDateChange}
        value={new Date(selectedDate)}
        tileClassName={({ date }) => {
          const formattedDate = moment(date).format('YYYY-MM-DD');
          return markedDates[formattedDate]?.marked ? 'marked' : '';
        }}
      />
<style>
  {`
    

    /* Style for marked dates with a dot */
    .react-calendar__tile.marked {
      position: relative; he tile */
    }

    .react-calendar__tile.marked::after {
      content: '';
      position: absolute;
      bottom: 4px; 
      left: 50%;
      transform: translateX(-50%);
      width: 6px; 
      height: 6px;
      background: #73224B; 
      border-radius: 50%; 
    }
    .react-calendar__tile.selected:hover {
      border-radius: 50%;
      height:50px;

    }
  `}
</style>

      </S.CalendarContainer>
     

      <S.TaskContainer>
        <S.TaskTitle>
          {t('taskfor')} {moment(selectedDate).format('D.M.YYYY')}
        </S.TaskTitle>
        <S.ScrollContainer>
          {hours.map((hour) => {
            const task = tasks[selectedDate]?.find((task) => {
              const taskStart = convertTimeToMinutes(task.startHour);
              const taskEnd = convertTimeToMinutes(task.endHour);
              const currentHour = convertTimeToMinutes(hour);
              return currentHour >= taskStart && currentHour <= taskEnd;
            });

            return (
              <S.TaskItem
                key={hour}
                onClick={() => task && onTaskPress(task)}
                style={{ backgroundColor: task ? '#e8b0cc' : 'transparent' }}
              >
                <S.HourText style={{ color: task ? '#fff' : '#000' }}>{hour}</S.HourText>
                <S.TaskText style={{ color: task ? '#fff' : '#000' }}>
                  {task ? task.title : t('notask')}
                </S.TaskText>
              </S.TaskItem>
            );
          })}
        </S.ScrollContainer>
        <S.AddButton onClick={() => {setModalVisible(true); setIsEditing(false) ;setTaskTitle('') ;setEndHour('');setStartHour('')}}>
          <FaPlus size={24} color="#fff" />    
        </S.AddButton>
      </S.TaskContainer>
      <TaskModal
        selectedDate={selectedDate}
        isEditing={isEditing}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        startHour={startHour}
        setStartHour={setStartHour}
        endHour={endHour}
        setEndHour={setEndHour}
        addTask={addTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
        notificationTriggerTime={notificationTriggerTime}
        setNotificationTriggerTime={setNotificationTriggerTime}
        notificationTriggerShow={notificationTriggerShow}
        setNotificationTriggerShow={setNotificationTriggerShow}
        startTime={startTime}
        setStartTime={setStartTime}
      />
    </S.Container2>
  );
};

export default Card1;