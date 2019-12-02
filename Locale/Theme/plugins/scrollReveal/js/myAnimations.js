// export function Scroll(){
const sr = ScrollReveal(
	{
		reset: true
	});
// sr.reveal('.sp-thumbnail', {duration: 1400, delay:200, origin: 'right'});
sr.reveal('.animatemefooter', {duration:800,});
//title section
sr.reveal('.title-howeare', {duration:800,origin:'top'});
//how we are section
sr.reveal('#imghoweare', {duration:800,origin:'left', delay:200});
sr.reveal('#how-content', {duration:800,origin:'right'});
//teammembers
sr.reveal('#member-sec', {duration:800});
sr.reveal('#member1', {duration:800,origin:'left', delay:200});
sr.reveal('#member2', {duration:800,origin:'top', delay:400});
sr.reveal('#member3', {duration:800,origin:'bottom', delay:600});
sr.reveal('#member4', {duration:800,origin:'right', delay:800});
//objectifs
sr.reveal('#goal1', {duration:800,origin:'left', delay:100});
sr.reveal('#goal2', {duration:800,origin:'top', delay:200});
sr.reveal('#goal3', {duration:800,origin:'right', delay:300});
sr.reveal('#goal4', {duration:800,origin:'left', delay:400});
sr.reveal('#goal5', {duration:800,origin:'bottom', delay:500});
sr.reveal('#goal6', {duration:800,origin:'right', delay:600});
//donate section
sr.reveal('.service-form', {duration:800,origin:'right'});
sr.reveal('#formleft-part', {duration:800,origin:'left', delay: 300});
// }
