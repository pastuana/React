import Developer from './first';
function fired () {
    console.log('Im fired because my salary is ');
}


let user = new Developer ( 'Igor', 10)
fired();
user.saySalary();