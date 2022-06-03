function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//1.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days = document.getElementById('days');

for(const element of dezDaysList) {
  const day = document.createElement('li');
  day.innerText = element;

  if (element === 25) {
    day.className = 'day holiday friday';
    days.appendChild(day)
    continue;
  }

  if (element === 24 || element === 31) {
    day.className = 'day holiday';
    days.appendChild(day)
    continue;
  }

  if (element === 4 || element === 11 || element === 18) {
    day.className = 'day friday';
    days.appendChild(day)
    continue;
  }

  day.className = 'day';
  days.appendChild(day);
}

//2.
function holidays(string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.innerText = string;
  button.id = 'btn-holiday';
  buttonsContainer.appendChild(button);
}

holidays('Feriados');

//3.
function changeColor() {
  const button = document.getElementById('btn-holiday');
  const holidays = document.getElementsByClassName('holiday');
  button.addEventListener('click', e => {
    for (let element of holidays) {
      if (element.style.backgroundColor === 'rgb(238, 238, 238)') {
        element.style.backgroundColor = '#5cb85c';
      } else {
        element.style.backgroundColor = 'rgb(238, 238, 238)';
      }
    }
  });
}

changeColor();

//4.
function friday(string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.innerText = string;
  button.id = 'btn-friday';
  buttonsContainer.appendChild(button);
}

friday('Sexta-feira');

//5.
function changeText() {
  const button = document.getElementById('btn-friday');
  const fridays = document.getElementsByClassName('friday');
  const days = [];
  
  for (let element of fridays) {
    days.push(element.innerText);
  }

  button.addEventListener('click', e => {
    let i = 0;

    for (let element of fridays) {
      if (element.innerText === 'SEXTOU!!!!') {
        element.innerText = days[i];
        i += 1;
      } else {
        element.innerText = 'SEXTOU!!!!';
      }
  
      console.log(i);
    }
  })
}

changeText();

//6.
function zoom() {
  const days = document.querySelectorAll('.day');

  for (let day of days) {
    day.addEventListener('mouseover', e => {
      e.target.style.fontSize = '30px';
    });

    day.addEventListener('mouseout', e => {
      e.target.style.fontSize = '20px';
    })
  }
}

zoom();

//7.
function task(string) {
  const myTasks = document.querySelector('.my-tasks');
  const task = document.createElement('span');
  task.innerText = string;
  myTasks.appendChild(task);
}

task('cozinhar');

//8.
function subtitle(string) {
  const myTasks = document.querySelector('.my-tasks');
  const subtitle = document.createElement('div');
  subtitle.className = 'task';
  subtitle.style.backgroundColor = string;
  myTasks.appendChild(subtitle);
}

subtitle('#5cb85c');

//9.
function selected() {
  const task = document.querySelector('.task');
  task.addEventListener('click', e => {
    if (task.className === 'task') {
      task.className = 'task selected';
    } else {
      task.className = 'task';
    }
  });
}

selected();

//10.
function changeNumberColor() {
  const days = document.querySelectorAll('.day');

  for (const day of days) {
    day.addEventListener('click', () => {
      if (day.style.color === 'rgb(119, 119, 119)') {
        const subtitle = document.querySelector('.task');
        day.style.color = subtitle.style.backgroundColor;
      } else {
        day.style.color = 'rgb(119, 119, 119)'
      }
    });
  }
}

changeNumberColor();

//Bônus.
function addCommitment() {
  const button = document.getElementById('btn-add');
  button.addEventListener('click', () => {
    const value = document.getElementById('task-input').value;

    if (value == '') {
      alert('Texto inválido!');
    } else {
      const ol = document.querySelector('ol');
      const li = document.createElement('li');
      li.innerText = value;
      ol.appendChild(li);
    }
  })

  button.addEventListener('keypress', (e) => {
    if (e.target.key === 'Enter') {
      const value = document.getElementById('task-input').value;

      if (value == '') {
        alert('Texto inválido!');
      } else {
        const ol = document.querySelector('ol');
        const li = document.createElement('li');
        li.innerText = value;
        ol.appendChild(li);
      }
    }
  });
}

addCommitment();