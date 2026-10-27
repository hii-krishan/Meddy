import './style.css';

const moods = [
  { id: 'overwhelmed', label: 'Overwhelmed', icon: '◌', color: 'lavender', description: 'A gentle reset for busy thoughts.', duration: '5 min', track: 1 },
  { id: 'low', label: 'Low energy', icon: '☼', color: 'peach', description: 'Soft motivation to get moving.', duration: '8 min', track: 5 },
  { id: 'focused', label: 'Need focus', icon: '✦', color: 'mint', description: 'Clear the noise and settle in.', duration: '12 min', track: 3 },
  { id: 'sleep', label: 'Ready to sleep', icon: '☾', color: 'blue', description: 'Slow down for a restful night.', duration: '15 min', track: 2 }
];

const library = [
  { id: 'music', label: 'Music', eyebrow: '12 tracks', title: 'Find your frequency.', text: 'Press play on a hand-picked soundtrack for your current mood.', image: '/images/playlist.jpg', action: 'music' },
  { id: 'yoga', label: 'Yoga', eyebrow: '8 poses', title: 'Move at your pace.', text: 'Gentle, restorative shapes to unwind your spine, open your breath, and ground your body.', image: '/images/yoga.jpg', action: 'yoga' },
  { id: 'articles', label: 'Articles', eyebrow: 'Mindful reads', title: 'A thought worth keeping.', text: 'Practical ideas for focus, rest, confidence, and everyday calm.', image: '/images/articles.jpg', action: 'articles' },
  { id: 'speakers', label: 'Speakers', eyebrow: '12 voices', title: 'Hear some speakers.', text: 'Pause with thoughtful words from voices that make room for calm.', image: '/images/speakers.jpg', action: 'speakers' }
];

const collections = {
  music: {
    label: 'Music', eyebrow: '12 tracks', title: 'Find your frequency.', image: '/images/playlist.jpg',
    items: Array.from({ length: 12 }, (_, index) => ({ title: `Meddy track ${index + 1}`, image: `/images/song${index + 1}.jpg`, audio: index + 1, text: 'A little sound for a softer moment.' }))
  },
  yoga: {
    label: 'Yoga', eyebrow: '8 poses', title: 'Move at your pace.', image: '/images/downward_dog.jpg',
    items: [
      ['Downward dog', 'downward_dog.jpg', 'Lengthen your spine and let the breath move freely.', ['Start on hands and knees.', 'Tuck your toes and lift your hips.', 'Press the floor away and take five slow breaths.']],
      ['Tree pose', 'tree_pose.jpg', 'Find a steady point and let balance become a practice.', ['Stand tall with feet together.', 'Place one foot on the inner calf or thigh.', 'Bring hands together and breathe for five counts.']],
      ['Child’s pose', 'child_pose.jpg', 'Rest your forehead and soften your shoulders.', ['Kneel with your big toes touching.', 'Sit back toward your heels and reach forward.', 'Rest your forehead and breathe slowly.']],
      ['Warrior II', 'warrior_ii.jpg', 'Stand tall, breathe deeply, and feel your strength.', ['Step feet wide and turn one foot outward.', 'Bend the front knee over the ankle.', 'Reach arms wide and hold for five breaths.']],
      ['Cobra pose', 'cobra_pose.jpg', 'Open the chest gently without forcing the back.', ['Lie on your belly with hands under shoulders.', 'Press lightly and lift your chest.', 'Keep shoulders relaxed and breathe three times.']],
      ['Bridge pose', 'bridge_pose.jpg', 'Lift through the heart while keeping your breath calm.', ['Lie on your back with knees bent.', 'Press feet down and lift your hips.', 'Hold gently, then lower with control.']],
      ['Mountain pose', 'mountain_pose.jpg', 'Stand grounded and notice the support beneath you.', ['Stand with feet hip-width apart.', 'Lengthen through the crown of your head.', 'Relax your jaw and take five breaths.']],
      ['Cat-cow flow', 'cat_cow_pose.jpg', 'Move slowly between rounding and lengthening the spine.', ['Come to hands and knees.', 'Inhale to soften the belly and lift the chest.', 'Exhale to round the spine and repeat slowly.']]
    ].map(([title, image, text, steps]) => ({ title, image: `/images/${image}`, text, steps }))
  },
  articles: {
    label: 'Articles', eyebrow: '6 mindful reads', title: 'A thought worth keeping.', image: '/images/articles.jpg',
    items: [
      ['The Benefits of Meditation', 'article1.jpg', 'Meditation is a powerful tool for improving mental health. By focusing on the present moment and quieting the mind, meditation can significantly reduce stress, anxiety, and depression. Regular meditation practice increases brain function, enhances emotional regulation, and promotes a sense of inner peace. It can help improve focus and concentration, making it an excellent practice for those with hectic schedules. Meditation not only reduces stress but also improves overall well-being, leading to a balanced and calm lifestyle.'],
      ['Mindfulness in Daily Life', 'article2.jpg', 'Mindfulness is the practice of staying present and fully engaged in the current moment. It can be easily integrated into daily activities like eating, walking, or even during work. By focusing on what’s happening right now, without distractions, mindfulness helps reduce stress and improve overall well-being. It allows you to break free from negative thought patterns and encourages you to be more patient and compassionate with yourself and others. Practicing mindfulness regularly can improve focus, boost emotional resilience, and enhance the ability to handle difficult situations calmly and thoughtfully.'],
      ['Overcoming Stress and Anxiety', 'article3.jpg', 'Stress and anxiety are common in today’s fast-paced world, but they can be managed effectively with the right techniques. Deep breathing exercises, progressive muscle relaxation, and mindfulness can help calm the nervous system and ease tension. Regular physical activity, like yoga or even a daily walk, also helps to reduce anxiety levels. Additionally, managing stress through time management and setting realistic goals can help prevent burnout. Talking to a counselor or therapist can provide professional support to cope with stress and anxiety. Adopting healthy habits and seeking support are essential steps in overcoming stress.'],
      ['Yoga for Mental Health', 'article4.jpg', 'Yoga is much more than just physical exercise—it’s also an essential practice for mental health. Combining breathing techniques, physical movement, and meditation, yoga helps reduce anxiety, depression, and stress. The mindful movements promote relaxation, improve emotional regulation, and help balance the nervous system. Regular yoga practice can increase flexibility and strength, while calming the mind. Whether you’re new to yoga or a seasoned practitioner, its mental health benefits are undeniable. Yoga provides a range of benefits for the body and mind, promoting long-term wellness.'],
      ['Importance of Self-Care', 'article5.jpg', 'Self-care is vital for maintaining mental health. Taking time for yourself through rest, hobbies, or simply taking a break helps recharge your energy and reduce stress. Activities like taking a walk, reading a book, or enjoying a warm bath can promote relaxation and clarity. Prioritizing self-care builds resilience, enabling you to handle life’s challenges more effectively. When you take care of yourself, you’re better equipped to face challenges with patience and grace, improving overall mental health and well-being.'],
      ['The Science of Happiness', 'article6.jpg', 'Happiness is not just an emotion; it’s also a science. Research shows that happiness is influenced by various factors, including genetics, life circumstances, and our daily habits. Positive social connections, a sense of purpose, and engaging in enjoyable activities are key components of a happy life. Gratitude, maintaining a positive mindset, and participating in activities that bring joy can significantly boost happiness. Studies also show that helping others and practicing kindness can improve our well-being. Understanding happiness can help us make choices that lead to a more fulfilling and joyful life.']
    ].map(([title, image, text]) => ({ title, image: `/images/${image}`, text }))
  },
  speakers: {
    label: 'Speakers', eyebrow: '12 voices', title: 'Hear some speakers.', image: '/images/speakers.jpg',
    items: [
      ['Meditation is the art of focusing your mind to find peace within.', 'Deepak Chopra'],
      ['The thing about meditation is: You become more and more you.', 'David Lynch'],
      ['Where there is peace and meditation, there is neither anxiety nor doubt.', 'St. Francis De Sales'],
      ['The quieter you become, the more you can hear.', 'Ram Dass'],
      ['In meditation, I can let go of everything. … I’m just dipping into that powerful source that creates everything. I take a little bath in it.', 'Hugh Jackman'],
      ['Meditation is the secret of all growth in spiritual life and knowledge.', 'James Allen'],
      ['Meditation brings wisdom; lack of meditation leaves ignorance. Know well what leads you forward and what holds you back.', 'Buddha'],
      ['The best way to know yourself is through meditation.', 'Sadhguru'],
      ['Meditation is the signpost directing the steps to the main highway of realization.', 'Guy Bogart'],
      ['Life is a mystery – mystery of beauty, bliss and divinity. Meditation is the art of unfolding that mystery.', 'Amit Ray'],
      ['Mindfulness meditation isn’t difficult, we just need to remember to do it.', 'Sharon Salzberg'],
      ['When you realize nothing is lacking, the whole world belongs to you.', 'Lao Tzu']
    ].map(([quote, author], index) => {
      const images = ['speaker1.jpg', 'speaker2.jpg', 'speaker3.jpg', 'speaker4.jpg', 'speaker5.jpg', 'speaker6.jpg', 'speaker7.jpg', 'speaker8.jpg', 'speaker9.jpg', 'speaker10.jpg', 'speaker11.jpg', 'speaker12.jpg'];
      return { title: `Quote ${index + 1}`, image: `/images/${images[index]}`, text: `"${quote}"`, author };
    })
  }
};
let detailAction = null;
let detailIndex = 0;
let breathingTimer = null;

const app = document.querySelector('#root');
let selectedMood = moods[0];
let timerId = null;
let timerSeconds = 300;
let playingTrack = null;
let audio = null;

function render() {
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" href="#" aria-label="Meddy home"><span class="brand-mark">m</span><span>meddy</span></a>
        <nav class="nav-links" aria-label="Primary navigation">
          <a class="active" href="#today">Today</a>
          <a href="#explore">Explore</a>
          <a href="#about">Our approach</a>
        </nav>
      </header>

      <main>
        <section class="hero" id="today">
          <div class="hero-copy">
            <p class="eyebrow"><span class="pulse-dot"></span> Your daily pause</p>
            <h1>Make room for<br /><em>what matters.</em></h1>
            <p class="hero-text">A little space to breathe, reset, and reconnect with yourself — whenever you need it.</p>
            <div class="hero-actions">
              <button class="button button-dark" data-action="start-session">Build my ritual <span>→</span></button>
            </div>
          </div>
          <div class="hero-art" aria-label="Illustration of a calm landscape">
            <div class="sun"></div><div class="hill hill-back"></div><div class="hill hill-front"></div>
            <div class="hero-card"><span>today's note</span><strong>Go gently.<br />You are doing enough.</strong><small>— meddy</small></div>
            <div class="spark spark-one">✦</div><div class="spark spark-two">✧</div>
          </div>
        </section>

        <section class="check-in section-wrap">
          <div class="section-heading"><div><p class="eyebrow">01 / check in</p><h2>How are you feeling?</h2></div><p class="heading-note">No right answer. Just notice.</p></div>
          <div class="mood-grid">${moods.map((mood) => `
            <button class="mood-card ${mood.color} ${mood.id === selectedMood.id ? 'selected' : ''}" data-mood="${mood.id}">
              <span class="mood-icon">${mood.icon}</span><strong>${mood.label}</strong><small>${mood.description}</small><span class="mood-arrow">↗</span>
            </button>`).join('')}</div>
        </section>

        <section class="recommendation section-wrap">
          <div class="recommendation-copy"><p class="eyebrow">Made for this moment</p><h2>${selectedMood.label === 'Overwhelmed' ? 'A softer start' : `A ${selectedMood.label.toLowerCase()} reset`}</h2><p>${selectedMood.description} Take ${selectedMood.duration} to come back to yourself.</p><button class="button button-light" data-action="start-session">Open this ritual <span>→</span></button></div>
          <div class="breath-visual" aria-label="Guided breathing: inhale, hold, exhale, hold"><div class="breath-ring ring-one"></div><div class="breath-ring ring-two"></div><div class="breath-core" data-breath-phase="inhale"><span data-breath-label>inhale</span><b data-breath-count>4</b><small>seconds</small></div></div>
        </section>

        <section class="explore section-wrap" id="explore">
          <div class="section-heading"><div><p class="eyebrow">02 / explore</p><h2>Something for every you.</h2></div><p class="heading-note">A quiet collection for wherever you are today.</p></div>
          <div class="explore-layout">
            <div class="explore-intro"><img src="/images/meddy.jpg" alt="" /><span class="explore-intro-shade"></span><div class="explore-intro-copy"><p class="eyebrow">Choose your doorway</p><h3>Make space for<br /><em>what helps.</em></h3><p>Each doorway opens a complete collection. Browse at your own pace, then use the next button to keep going.</p></div></div>
            <div class="category-grid">${library.map((item) => `<button class="category-card category-${item.action}" data-library="${item.action}"><img src="${item.image}" alt="" /><span class="category-shade"></span><span class="category-card-copy"><small>${collections[item.action]?.eyebrow || item.eyebrow}</small><strong>${item.label}</strong><i>↗</i></span></button>`).join('')}</div>
          </div>
        </section>

        <section class="about-section section-wrap" id="about">
          <div><p class="eyebrow">03 / our approach</p><h2>Wellness that feels<br /><em>human.</em></h2></div>
          <div class="about-copy"><p>Meddy is a quiet corner for the days when everything feels a little too loud. There is no streak to protect and no perfect routine to chase.</p><p>Choose what helps: listen, move, read, play, or simply take a breath. Small moments count here.</p><div class="about-stats"><strong>01 <span>Notice</span></strong><strong>02 <span>Choose</span></strong><strong>03 <span>Return</span></strong></div></div>
        </section>

        <section class="quote-band"><p>“</p><blockquote>There is a quiet place inside<br />you. <em>Come visit it.</em></blockquote><span>— your reminder for today</span></section>
      </main>

      <footer>
        <div class="footer-main">
          <a class="footer-wordmark" href="#">meddy<span>.</span></a>
          <p>Find your<br /><em>softer pace.</em></p>
          <span class="footer-orbit" aria-hidden="true">✦</span>
        </div>
        <div class="footer-bottom">
          <span>Made for slower moments.</span>
          <span>Made by <strong>Krishan</strong> <i>♡</i></span>
          <span>© 2024 Meddy</span>
        </div>
      </footer>
    </div>
    <div class="toast" role="status" aria-live="polite"></div>
    <div class="modal-backdrop" data-action="close-modal"><div class="session-modal" role="dialog" aria-modal="true" aria-labelledby="session-title"><button class="modal-close" data-action="close-modal" aria-label="Close">×</button><p class="eyebrow">Your ${selectedMood.duration} pause</p><h2 id="session-title">${selectedMood.label} reset</h2><p>Follow the circle. Breathe in as it grows, and out as it softens.</p><div class="timer-ring"><span id="timer-label">${formatTime(timerSeconds)}</span><small>remaining</small></div><button class="button button-dark" data-action="toggle-timer" id="timer-button">Start timer <span>→</span></button></div></div>
    <div class="detail-backdrop" data-action="close-detail"><div class="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title"><button class="modal-close" data-action="close-detail" aria-label="Close">×</button><img id="detail-image" src="" alt="" /><div class="detail-copy"><p class="eyebrow" id="detail-eyebrow"></p><h2 id="detail-title"></h2><p id="detail-text"></p><div id="detail-body"></div></div></div></div>
    <div class="audio-dock ${playingTrack ? 'visible' : ''}"><img src="${playingTrack ? `/images/song${playingTrack}.jpg` : '/images/playlist.jpg'}" alt="" /><div><small>now playing</small><strong>${playingTrack ? `Meddy track ${playingTrack}` : 'Choose a sound to begin'}</strong></div><button data-action="toggle-audio" aria-label="Play or pause">${audio?.paused === false ? 'Ⅱ' : '▶'}</button></div>
  `;
  bindEvents();
}

function formatTime(seconds) { return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`; }
function showToast(message) { const toast = document.querySelector('.toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2600); }
function openSession() { document.querySelector('.modal-backdrop').classList.add('open'); }
function closeSession() { document.querySelector('.modal-backdrop').classList.remove('open'); stopTimer(); }
function openDetail(action, specificIndex = 0) {
  const item = library.find((entry) => entry.action === action) || library.find((entry) => entry.id === action);
  if (!item || !collections[action] || !collections[action].items.length) {
    showToast('This collection is not available yet.');
    return;
  }
  detailAction = action;
  detailIndex = typeof specificIndex === 'number' && specificIndex >= 0 && specificIndex < collections[action].items.length ? specificIndex : 0;
  updateDetail();
}
function updateDetail() {
  const action = detailAction;
  const collection = collections[action];
  if (!collection) return;
  const item = collection.items[detailIndex];
  const modal = document.querySelector('.detail-backdrop');
  const detailModal = modal?.querySelector('.detail-modal');
  if (!item || !modal || !detailModal) return;

  const content = {
    music: { eyebrow: `Listen / track ${detailIndex + 1} of 12`, title: item.title, text: item.text },
    yoga: { eyebrow: `Move / pose ${detailIndex + 1} of 8`, title: item.title, text: item.text },
    articles: { eyebrow: `Read / article ${detailIndex + 1} of 6`, title: item.title, text: item.text },
    speakers: { eyebrow: `Thought / quote ${detailIndex + 1} of 12`, title: item.author, text: item.text }
  }[action];

  if (!content) return;

  detailModal.dataset.detailType = action;
  detailModal.classList.toggle('article-detail', action === 'articles');
  const detailImg = document.querySelector('#detail-image');
  detailImg.src = item.image;
  detailImg.alt = item.title || 'Collection preview';
  document.querySelector('#detail-eyebrow').textContent = content.eyebrow;
  document.querySelector('#detail-title').innerHTML = content.title;
  document.querySelector('#detail-text').textContent = content.text;

  const detailBody = document.querySelector('#detail-body');
  if (action === 'yoga') {
    detailBody.innerHTML = `
      <ol class="pose-steps">${item.steps.map((step) => `<li>${step}</li>`).join('')}</ol>
      <div class="detail-nav-row">
        <button type="button" class="nav-pose-btn" data-prev-detail ${detailIndex === 0 ? 'disabled' : ''}><span>←</span> Previous pose</button>
        <button type="button" class="nav-pose-btn next-pose" data-next-detail>Next pose <span>→</span></button>
      </div>
    `;

    const prevBtn = modal.querySelector('[data-prev-detail]');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (detailIndex > 0) {
          detailIndex -= 1;
          updateDetail();
        }
      });
    }

    const nextBtn = modal.querySelector('[data-next-detail]');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        detailIndex = (detailIndex + 1) % collection.items.length;
        updateDetail();
      });
    }
  } else {
    detailBody.innerHTML = action === 'articles'
      ? '<div class="article-meta"><span class="article-rule"></span><span>Original Meddy article</span><span class="article-rule"></span></div>'
      : action === 'speakers'
        ? '<span class="detail-note">Original Meddy quote collection</span>'
        : '<button class="button button-dark detail-action" data-detail-play>Play this track <span>▶</span></button>';

    detailBody.insertAdjacentHTML('beforeend', `<button class="next-detail" data-next-detail>Next ${collections[action].label} <span>→</span></button>`);

    const playButton = modal.querySelector('[data-detail-play]');
    if (playButton) playButton.addEventListener('click', () => playTrack(item.audio || selectedMood.track, false));

    const nextBtn = modal.querySelector('[data-next-detail]');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        detailIndex = (detailIndex + 1) % collections[action].items.length;
        updateDetail();
      });
    }
  }

  modal.classList.add('open');
}
function closeDetail() { document.querySelector('.detail-backdrop').classList.remove('open'); }
function stopTimer() { clearInterval(timerId); timerId = null; timerSeconds = Number(selectedMood.duration.split(' ')[0]) * 60; }
function toggleTimer() {
  const button = document.querySelector('#timer-button');
  if (timerId) { stopTimer(); button.innerHTML = 'Start timer <span>→</span>'; document.querySelector('#timer-label').textContent = formatTime(timerSeconds); return; }
  timerId = setInterval(() => { timerSeconds -= 1; document.querySelector('#timer-label').textContent = formatTime(timerSeconds); if (timerSeconds <= 0) { stopTimer(); showToast('Beautiful work. Take that calm with you.'); button.innerHTML = 'Start again <span>→</span>'; } }, 1000);
  button.innerHTML = 'Pause timer <span>Ⅱ</span>';
}
function playTrack(track, refresh = true) {
  if (!audio) { audio = new Audio(`/playlist/song${track}.mp3`); audio.addEventListener('ended', () => { playingTrack = null; render(); }); }
  if (playingTrack === track && !audio.paused) { audio.pause(); if (refresh) render(); return; }
  if (playingTrack !== track) { audio.src = `/playlist/song${track}.mp3`; playingTrack = track; }
  audio.play().catch(() => showToast('Your browser blocked autoplay — tap play to begin.'));
  if (refresh) render();
}
function bindEvents() {
  startBreathingGuide();
  document.querySelectorAll('[data-mood]').forEach((card) => card.addEventListener('click', () => { selectedMood = moods.find((mood) => mood.id === card.dataset.mood); stopTimer(); render(); }));
  document.querySelectorAll('[data-action="start-session"]').forEach((button) => button.addEventListener('click', openSession));
  document.querySelector('[data-action="close-modal"]').addEventListener('click', (event) => { if (event.target.dataset.action === 'close-modal') closeSession(); });
  document.querySelector('.modal-close').addEventListener('click', closeSession);
  document.querySelector('#timer-button').addEventListener('click', toggleTimer);

  app.onclick = (event) => {
    const button = event.target.closest('[data-library]');
    if (!button) return;
    event.preventDefault();
    openDetail(button.dataset.library);
  };

  document.querySelectorAll('[data-action="close-detail"]').forEach((element) => element.addEventListener('click', (event) => { if (event.target.dataset.action === 'close-detail') closeDetail(); }));
  const audioButton = document.querySelector('[data-action="toggle-audio"]');
  if (audioButton) audioButton.addEventListener('click', () => { if (audio?.paused) audio.play(); else audio?.pause(); render(); });
}

function startBreathingGuide() {
  clearInterval(breathingTimer);
  const phases = [
    { name: 'inhale', seconds: 4 },
    { name: 'hold', seconds: 2 },
    { name: 'exhale', seconds: 6 },
    { name: 'hold', seconds: 2 }
  ];
  let phaseIndex = 0;
  let remaining = phases[phaseIndex].seconds;
  const update = () => {
    const core = document.querySelector('[data-breath-phase]');
    const label = document.querySelector('[data-breath-label]');
    const count = document.querySelector('[data-breath-count]');
    if (!core || !label || !count) return;
    const phase = phases[phaseIndex];
    core.dataset.breathPhase = phase.name;
    label.textContent = phase.name;
    count.textContent = remaining;
  };
  update();
  breathingTimer = setInterval(() => {
    remaining -= 1;
    if (remaining < 1) {
      phaseIndex = (phaseIndex + 1) % phases.length;
      remaining = phases[phaseIndex].seconds;
    }
    update();
  }, 1000);
}

render();
