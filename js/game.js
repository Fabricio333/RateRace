import scenes from './scenes.js';

const img = document.getElementById('scene-img');
const caption = document.getElementById('scene-text');
const btnBox = document.getElementById('choices');

let state = { current: 'start', history: [] };

function render(sceneId) {
    const scene = scenes[sceneId];
    img.src = `assets/img/${scene.img}`;
    img.alt = scene.alt;
    caption.textContent = scene.text;

    btnBox.innerHTML = '';
    if (scene.options.length === 0) {
        const endBtn = document.createElement('button');
        endBtn.textContent = 'Replay Game';
        endBtn.className = 'px-4 py-2 m-2 rounded bg-green-600 hover:bg-green-700';
        endBtn.onclick = () => render('start');
        btnBox.appendChild(endBtn);
    } else {
        scene.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'px-4 py-2 m-2 rounded bg-blue-600 hover:bg-blue-700 text-white';
            btn.textContent = opt.label;
            btn.onclick = () => {
                state.history.push(sceneId);
                render(opt.next);
            };
            btnBox.appendChild(btn);
        });
    }
}

window.addEventListener('load', () => render(state.current));
