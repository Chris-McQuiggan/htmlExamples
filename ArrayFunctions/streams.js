const animals = ['dog', 'cat', 'hippopotamus', 'squid', 'unicorn'];
let result = animals.filter((anim) => anim.length < 8)
    .map((anim) => anim += '!')
    .map((anim, i) => (i === 0) ? (anim.charAt(0).toUpperCase() + anim.substr(1)) : (", " + anim.charAt(0).toUpperCase() + anim.substr(1)))
    .reduce((acc, anim) => acc += anim, 'Animals: ')
// .reduce((acc, anim) => acc += anim.charAt(0).toUpperCase() + anim.substr(1), 'Animals: ')
// .reduce((acc, anim, i) => {
//     if (i === 0) {
//         acc += anim.charAt(0).toUpperCase() + anim.substr(1)
//     } else {
//         acc += ', ' + anim.charAt(0).toUpperCase() + anim.substr(1)
//     }
//     return acc;
// }, 'Animal: ');
console.log(result);