let schedule = ['wake up', 'shower', 'to remove', 'pray', 'breakfast', 'go to work'];

schedule.push('come back home');

schedule.splice(2, 1)

const scheduleListbycomma = schedule.join(', ');

console.log(schedule);
console.log(scheduleListbycomma);
