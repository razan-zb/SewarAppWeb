/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import * as S from '../cardStyle';
import Dropdown from './Dropdown';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const TaskModal = ({
  selectedDate,
  isEditing,
  modalVisible,
  setModalVisible,
  taskTitle,
  setTaskTitle,
  startHour,
  setStartHour,
  endHour,
  setEndHour,
  addTask,
  updateTask,
  deleteTask,
  notificationTriggerTime,
  setNotificationTriggerTime,
  notificationTriggerShow,
  setNotificationTriggerShow,
  startTime,
  setStartTime,
}) => {
  const { t } = useTranslation();

  const notificationTriggerShows = [
    t('oneHourBefore'),
    t('oneDayBefore'),
    t('fiveMinutesBefore'),
    t('none'),
  ];

  useEffect(() => {
    setStartTime(moment.utc(`${selectedDate} ${startHour}`, 'YYYY-MM-DD HH:mm').toDate());
    handleChange();
  }, [startHour, notificationTriggerShow]);

  const handleChange = () => {
    setNotificationTriggerShow(notificationTriggerShow);
    if (notificationTriggerShow) {
      const notificationTime = new Date(startTime); // Copy to avoid mutating state
      switch (notificationTriggerShow) {
        case t('oneHourBefore'):
          notificationTime.setHours(notificationTime.getHours() - 1);
          break;
        case t('oneDayBefore'):
          notificationTime.setDate(notificationTime.getDate() - 1);
          break;
        case t('fiveMinutesBefore'):
          notificationTime.setMinutes(notificationTime.getMinutes() - 5);
          break;
        default:
          break;
      }
      setNotificationTriggerTime(notificationTime);
    }
  };

  const handleAddTask = async () => {
    await addTask();
  };

  return (
    modalVisible && (
      <div style={styles.modalOverlay} onClick={() => setModalVisible(false)}>
        <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button
            style={styles.exitButton}
            onClick={() => setModalVisible(false)}
          >
            X
          </button>
          <h2 style={styles.modalTitle}>{isEditing ? t('editTask') : t('addTask')}</h2>
          <input
            style={styles.input}
            placeholder={t('taskTitle')}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <input
            style={styles.input}
            placeholder={t('startHourExample')}
            value={startHour}
            onChange={(e) => setStartHour(e.target.value)}
          />
          <input
            style={styles.input}
            placeholder={t('endHourExample')}
            value={endHour}
            onChange={(e) => setEndHour(e.target.value)}
          />

          <div style={styles.notificationContainer}>
            <label style={styles.notificationLabel}>{t('notification')}</label>
            <Dropdown
              options={notificationTriggerShows}
              selectedOption={notificationTriggerShow}
              onSelect={setNotificationTriggerShow}
            />
          </div>

          <button
            style={styles.modalButton}
            onClick={isEditing ? updateTask : handleAddTask}
          >
            {isEditing ? t('updateTask') : t('addTask')}
          </button>
          {isEditing && (
            <button style={styles.modalButton} onClick={deleteTask}>
              {t('deleteTask')}
            </button>
          )}
        </div>
      </div>
    )
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    width: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  exitButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#73224B',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  modalTitle: {
    color: '#73224B',
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '90%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  notificationContainer: {
    marginBottom: '15px',
  },
  notificationLabel: {
    fontSize: '16px',
    color: '#73224B',
    marginBottom: '5px',
  },
  modalButton: {
    backgroundColor: '#73224B',
    color: '#fff',
    padding: '10px',
    width: '100%',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TaskModal;