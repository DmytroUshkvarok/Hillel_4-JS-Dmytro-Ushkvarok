﻿Hello!

Here You can find my current JavaScript studying results.

Texts of hometasks will be placed below in this file.



Homework#1

	Task 1
		Написать 5 вариантов записи строки: It's beautiful day. I like "free day".

	Task 2
		Написать правильное умножение двух дробных чисел (например, 5.45 и 8.3) => 5.45 * 8.3 === 5.45*8.3.

	Task 3
		"string" + 2 => NaN исправить :)

Homework#2

	Task 1
		В магазине продаются яблоки по цене 12,50. Завтра на них акция - 15% (скидка может меняться !!!)
		Также пришли апельсины по цене закупки 12,50 (цена может меняться!!!!!), наценка в магазине 15%. Рассчитайте цены на товары.

	Task 2
		Создать ценник

        		'Яблоки украинские.
        		цена: 12,50грн'

		двумя способами. Учитывая переносы строк и то, что цена меняется при каждом новом поступлении.
		Использовать для строк синтаксис ES6.(!)

Homework#3

	Task 1
		Переписать формирование ценника. Если есть скидка, то рассчитывать ее, если нет - напечатать старый ценник. Написать без копирования 		одинаковых участков кода.

	Task 2
		Сделать проверку на длину строки. Если длина меньше 10 букв, то выводить в консоль каждую букву отдельно (посимвольно). Иначе вывести первые 		7 символов и с 10-го символа до конца строки.

Homework#4

    Task 1
        Даны два числа, которые представлены строками (перевести их в числа нельзя, так как получается очень большое число). Необходимо сложить их и вывести правильный результат.

    Task 2
        Напишите функцию проверки пароля, которая принимает строку в качестве аргумента и проверяет ее по правилам:
        a) пароль должен содержать только буквенно-цифровые символы;
        b) длина пароля должна быть более 6 символов, но менее 20;
        c) пароль должен содержать буквы и цифры.
        Функция должна возвращать "VALID", если строка соответствует требованиям, или "INVALID", если это не так.
        Не использовать регулярные выражения!!!

        validatePassword('pass') => 'INVALID'
        validatePassword('yf23jKIG98') => 'VALID'

        function validatePassword(значение) {
            // Ваш код здесь
        }

    Task 3
        Создайте функцию, которая проверяет число для трех разных требований:
        a) число является простым;
        b) число четное;
        c) число кратно 10.
        Каждое требование должно возвращать true или false.
        Ответ должен быть задан как массив [isPrime, isEven, isDividedTen].
        Число всегда будет целым, положительным или отрицательным. Обратите внимание, что отрицательные числа не могут быть простыми, но они могут быть кратными 10.

        checkNumber(7) => [true, false, false]
        checkNumder(-10) => [false, true, true]

        function checkNumber(число) {
            // Ваш код здесь
        }
