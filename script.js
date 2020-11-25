// Анализ, является ли строкой 
const isString = function(sts) {
    if (typeof sts !== 'string') {
        return true;
    } else {
        return false;
    }
    
}

// Чистка строки и обрезание по длине
const excerpt = function(st) {
        st = st.trim();
        
        if (st.length > 30) {
            return st.substr(0, 30) + '...';
        } else {
            return st;
        }
    }

// Главный анализатор
const textAnalitic = function(bigText) {

    let newStr;

    if (isString(bigText)) {
        newStr = 'Не является строкой';
    } else {
        newStr = excerpt(bigText);
    }
    return newStr;
}

// Вызов
let s = 'Обратите внимание на то, что все значения созданные с помощью ключевого слова';

console.log(textAnalitic(s));