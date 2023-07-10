import userData from './data/mockeddata.json';

export function getUserData(userId) {
  try {
    const userIndex = userData.USER_ACTIVITY.findIndex(
      user => user.userId === parseInt(userId)
    );
    const user = userData.USER_ACTIVITY[userIndex];
    const userPerformance = userData.USER_PERFORMANCE[userIndex];
    const userMainData = userData.USER_MAIN_DATA[userIndex];

    user.performance = userPerformance.data;

    user.sessions.forEach((session, index) => {
      session.sessionLength = userData.USER_AVERAGE_SESSIONS[userIndex].sessions[index].sessionLength;
    });

    return { user, userMainData };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
