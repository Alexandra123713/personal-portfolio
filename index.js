import { hardSkills, softSkills, projects } from './data.js';

// Display hard skills

const hardSkillsContainer = document.querySelector('.hard-skills-container');

hardSkills.map((el) => {
	hardSkillsContainer.insertAdjacentHTML(
		'beforeend',
		`
    	<div class="skill">
							<div class="name">${el.skill}</div>
                            <div class="skill-img-wrapper">
                            		<img
								src="${el.iconSrc}"
								alt="${el.alt}"
								class="skill-icon" />
                            </div>
						</div>
    `
	);
});

// Display soft skills

const softSkillsContainer = document.querySelector('.soft-skills-container');

softSkills.map((el) => {
	softSkillsContainer.insertAdjacentHTML(
		'beforeend',
		`
    	<div class="skill">
							<div class="name">${el.skill}</div>
                            <div class="skill-img-wrapper">
                            		<img
								src="${el.iconSrc}"
								alt="${el.alt}"
								class="skill-icon" />
                            </div>
						</div>
    `
	);
});

// Display projects

const projectsContainer = document.querySelector('.projects-container');

projects.map((el) => {
	const liveLinkHTML = el.isDeployed
		? `<div class="link-btn">
				<a href="${el.liveLink}"
					target="_blank"
					>See it live</a>
			    <div class="live-icon"></div>
			</div>`
		: '';

	const liveLinkImage = el.isDeployed
		? `<a href="${el.liveLink}" target="_blank" class="img-wrapper"><img
		            class="project-img"
					src="${el.imgSrc}" 
					alt="${el.name}" /></a>`
		: `<a href="#" target="_blank" class="img-wrapper disabled-link" aria-disabled="true""><img
		            class="project-img"
					src="${el.imgSrc}" 
					alt="${el.name}" /></a>`;

	const technologiesUsed = Object.entries(el.technologies)
		.map(([technology, icon]) => {
			return `	
			<div class="technology-item">
				<img src="${icon}" alt="${technology}" class="tech-icon" />
				<span>${technology}</span>
			</div>`;
		})
		.join('');

	projectsContainer.insertAdjacentHTML(
		'afterbegin',
		`
			<div class="project-card">
				<h4 class="project-name">${el.name}</h4>
				${liveLinkImage}
				<div class="technologies"> 
					<span>Technologies used:</span>
					<div class="container">${technologiesUsed}</div>
				</div>
				<div class="buttons-container">
				<div class="link-btn">
					<a
						href="${el.codeSource}"
						target="_blank"
						>View on GitHub</a>
					<div class="github-icon"></div>
				</div>
				
					${liveLinkHTML}
				</div>
			</div>
		`
	);
});

//Open burger menu

const body = document.querySelector('body');
const burgerIcon = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close-icon img');
const overlay = document.querySelector('.overlay');

const showMobileMenu = () => {
	body.classList.toggle('disabled-scroll');
	menu.classList.toggle('open');
	burgerIcon.classList.toggle('hidden');
	closeIcon.style.display = 'block';
	overlay.classList.toggle('show-overlay');
};

burgerIcon.addEventListener('click', showMobileMenu);

//Close menu on nav-item click

const navItems = document.querySelectorAll('.nav-item');

const closeMenu = () => {
	body.classList.toggle('disabled-scroll');
	menu.classList.toggle('open');
	burgerIcon.classList.toggle('hidden');
	closeIcon.style.display = 'none';
	overlay.classList.toggle('show-overlay');
};

navItems.forEach((item) => {
	item.addEventListener('click', closeMenu);
});

closeIcon.addEventListener('click', closeMenu);

overlay.addEventListener('click', closeMenu);
