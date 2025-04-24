const Name = prompt('Ismingizni kiriting');
const Letter = prompt('Xarf kiriting')

if (Name.includes(Letter)) {
    alert(`'${Letter}' Xarfi bor`)
} else {
    alert(`'${Letter}' xarfi yoq`)
}