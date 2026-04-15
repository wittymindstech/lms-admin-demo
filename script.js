function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'admin' && pass === 'admin123') {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    loadDemo();
  } else {
    alert('Invalid credentials');
  }
}

function extractID(url) {
  const match = url.match(/(?:v=|be\/)([^&]+)/);
  return match ? match[1] : null;
}

function addCourse() {
  const name = document.getElementById('courseName').value;
  const link = document.getElementById('courseLink').value;
  const id = extractID(link);

  if (!id) return alert('Invalid YouTube link');

  const thumb = `https://img.youtube.com/vi/${id}/0.jpg`;

  const div = document.createElement('div');
  div.className = 'course-card';
  div.innerHTML = `
    <img src="${thumb}">
    <div>
      <b>${name}</b><br>
      <a href="${link}" target="_blank">Watch</a>
    </div>
  `;

  document.getElementById('courseList').prepend(div);
}

function addInstructor() {
  const div = document.createElement('div');
  div.innerHTML = `
    👨‍🏫 <b>${instructorName.value}</b><br>
    ${instructorEmail.value}<br>
    ${instructorPhone.value}<br>
    <small>${instructorExpertise.value}</small><br>
    <i>${instructorBio.value}</i>
  `;

  document.getElementById('instructorList').prepend(div);
}

function addNotification() {
  const li = document.createElement('li');
  li.textContent = notificationText.value;
  document.getElementById('notificationList').prepend(li);
}

function loadDemo() {
  document.getElementById('courseName').value = 'Python Basics';
  document.getElementById('courseLink').value = 'https://youtu.be/rfscVS0vtbw';
  addCourse();
}function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'admin' && pass === 'admin123') {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    loadDemo();
  } else {
    alert('Invalid credentials');
  }
}

function extractID(url) {
  const match = url.match(/(?:v=|be\/)([^&]+)/);
  return match ? match[1] : null;
}

function addCourse() {
  const name = document.getElementById('courseName').value;
  const link = document.getElementById('courseLink').value;
  const id = extractID(link);

  if (!id) return alert('Invalid YouTube link');

  const thumb = `https://img.youtube.com/vi/${id}/0.jpg`;

  const div = document.createElement('div');
  div.innerHTML = `
    <img src="${thumb}" width="120">
    <p><b>${name}</b></p>
    <a href="${link}" target="_blank">Watch</a>
    <hr/>
  `;

  document.getElementById('courseList').prepend(div);
}

function addInstructor() {
  const div = document.createElement('div');
  div.innerHTML = `
    👨‍🏫 <b>${instructorName.value}</b><br>
    ${instructorEmail.value}<br>
    ${instructorPhone.value}<br>
    ${instructorExpertise.value}<br>
    <i>${instructorBio.value}</i>
    <hr/>
  `;

  document.getElementById('instructorList').prepend(div);
}

function addNotification() {
  const li = document.createElement('li');
  li.textContent = notificationText.value;
  document.getElementById('notificationList').prepend(li);
}

function loadDemo() {
  document.getElementById('courseName').value = 'Python Course';
  document.getElementById('courseLink').value = 'https://youtu.be/rfscVS0vtbw';
  addCourse();
}
