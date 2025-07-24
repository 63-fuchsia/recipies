//Задача 1. Поиск суммы

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const pairValueIndex = map.get(nums[i]);

        if (pairValueIndex !== undefined) {
            return [pairValueIndex, i];
        } else {
            map.set(target - nums[i], i);
        }
    }
};
twoSum([1, 2, 8, 7, 10], 9);

//Задача 3. Самая длинная подстрока без повторяющихся символов

var lengthOfLongestSubstring = function (s) {
    if (!s.length) return 0;

    let maxLength = 1;
    for (let j = 0; j < s.length; j++) {
        let localMaxLength = 0;
        for (let i = j + 1; i < s.length; i++) {
            if (!s.substring(j, i).includes(s[i])) {
                localMaxLength = s.substring(j, i + 1).length;
            } else {
                localMaxLength = 0;
                break;
            }

            if (localMaxLength > maxLength) {
                maxLength = localMaxLength;
            }
        }
    }
    return maxLength;
};

lengthOfLongestSubstring("pwwkew");

//Задача 6. Зигзаг
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    const zigZag = new Array(numRows).fill("");
    let usedLettersCount = 0;

    for (let k = 0; k < s.length; k++) {
        for (let i = 0; i < numRows; i++) {
            if (!(k % (numRows - 1)) || (k % (numRows - 1)) && !((k + i) % (numRows - 1))) {
                zigZag[i] = zigZag[i] + s[usedLettersCount];
                usedLettersCount++;
            }

            if (usedLettersCount === s.length) return zigZag.join("");;
        }
    }
};

convert("PAYPALISHIDSFSDLKFJSDKLFJSKLMDCSDMSKLVDSJSDKFKMSKDCMSKDJGFDKSMSDKLCMSDKLDSKFSMSDKLFJSDKFMSDCKSDFSDKFMSKMRING", 4);

//Задача 7. Развернутое число
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x === 0) return 0;

    let copy = Math.abs(x);
    let result = 0;

    while (copy !== 0) {
        const digit = copy % 10;
        copy = Math.floor(copy / 10);
        result = result * 10 + digit;
    }

    result = x > 0 ? result : result * -1;

    return Math.abs(result) > Math.pow(2, 31) ? 0 : result;
};

reverse(123);

//Задача 9. Численный полиндром

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let copy = x;
    let reversedX = 0;
    while (copy > 0) {
        reversedX = (reversedX * 10) + (copy % 10);
        copy = Math.floor(copy / 10);
    }
    return x === reversedX;
};

isPalindrome(121);


//Задача 11. Максимальный объем воды
/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    let left = 0, right = height.length - 1;
    let result = 0;

    while (true) {
        const volume = Math.min(height[left], height[right]) * (right - left);
        if (volume > result) {
            result = volume;
        }

        if (height[left] < height[right]) {
            if (left < right - 1) {
                left = left + 1;
            } else {
                break;
            }
        } else {
            if (right > left + 1) {
                right = right - 1;
            } else {
                break;
            }
        }
    }

    return result;
};

maxArea([1, 1, 6, 2, 5, 4, 8, 3, 1]);

//Задача 12. Арабские цифры
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const map = new Map([
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"],
        [4000, "I̅V̅"],

        [4, "IV"],
        [9, "IX"],
        [40, "XL"],
        [90, "XC"],
        [400, "CD"],
        [900, "CM"]
    ]);
    const str = num.toString();
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        const denominator = Math.pow(10, i);
        const currentSymbol = str[str.length - i - 1];
        const digit = currentSymbol * denominator;

        if (map.get(digit) != undefined) {
            result = result + map.get(digit);
        } else {
            if (currentSymbol < 4) {
                result = result + map.get(denominator).repeat(currentSymbol);
            } else {
                result = result + map.get(5 * denominator) + map.get(denominator).repeat(currentSymbol - 5);
            }
        }
    }

    return result;
};
for (let i = 0; i < 4101; i++) {
    intToRoman(i);
}

//Задача 12. Арабские цифры V2

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let copyNum = num;

    const map = [
        [1, "I"],
        [4, "IV"],
        [5, "V"],
        [9, "IX"],
        [10, "X"],
        [40, "XL"],
        [50, "L"],
        [90, "XC"],
        [100, "C"],
        [400, "CD"],
        [500, "D"],
        [900, "CM"],
        [1000, "M"],
    ];

    let result = "";
    let i = map.length - 1;

    while (copyNum != 0) {
        if (copyNum >= map[i][0]) {
            result += map[i][1];
            copyNum -= map[i][0];
        } else {
            i--;
        }
    }

    return result;
};

//Задача 13. Римские цифры

/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
    const map = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);
    const arr = s.toUpperCase().split("");
    let result = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i - 1] === "I" && (arr[i] === "V" || arr[i] === "X")) {
            result = result + map.get(arr[i]) - 2 * map.get("I");
            continue;
        }

        if (arr[i - 1] === "X" && (arr[i] === "L" || arr[i] === "C")) {
            result = result + map.get(arr[i]) - 2 * map.get("X");
            continue;
        }

        if (arr[i - 1] === "C" && (arr[i] === "D" || arr[i] === "M")) {
            result = result + map.get(arr[i]) - 2 * map.get("C");
            continue;
        }

        result = result + map.get(arr[i]);

    }
    return result;
};

romanToInt("MCMXCIV");

//Задача 17. Буквенные комбинации номера телефона.

/**
 * @param {string} digits
 * @return {string[]}
 */

const calcCombination = (combination, rawLetters, result) => {
    if (rawLetters.length === 0) return result.push(combination);

    for (let i = 0; i < rawLetters[0].length; i++) {
        calcCombination(combination + rawLetters[0][i], rawLetters.slice(1), result);
    }
}

var letterCombinations = function (digits) {
    if (!digits) return [];

    const map = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"]
    ]);
    const numbers = digits.split("");
    const letters = numbers.map(digit => map.get(digit)).filter(Boolean);

    let result = [];

    calcCombination("", letters, result);

    return result;
};

letterCombinations("123");

//Задача 35. Поиск места вставки
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return left;
};

searchInsert([1, 3, 4, 5, 6, 7, 9], 8);


//Задача 66. Плюс 1

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    let buffer = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9 && buffer) {
            digits[i] = digits[i] + buffer;
            buffer = 0;
            break;
        }

        if (digits[i] === 9 && buffer) {
            digits[i] = 0;
        }
    }

    if (buffer) {
        digits.unshift(buffer);
    }

    return digits;
}

plusOne([9, 9, 9]);



//Задача 72. Редактировать расстояние
/* Алгоритм Левенштайна https://habr.com/ru/articles/676858/ */
/*
Строится матрица
    r o s
  0 1 2 3
h 1 
o 2
r 3
s 4
e 5

Далее, вычисляя значение ячейки, считаем минимальное между соседними левым и верхним значениями увеличенными на единицу и верхним по диоганали, 
увеличенном на 1, если буквы в строке и колонке не равны
Нижнее правое значение и есть результат

    r o s
  0 1 2 3
h 1 1 2 3
o 2 2 1 2
r 3 2 2 2
s 4 3 3 2
e 5 4 4 3

*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const firstWordLength = word1.length + 1;
    const secondWordLength = word2.length + 1;
    let distance = Array(firstWordLength).fill(null).map(() => Array(secondWordLength).fill(null));

    for (let i = 0; i < firstWordLength; i++) {
        distance[i][0] = i;
    }

    for (let i = 0; i < secondWordLength; i++) {
        distance[0][i] = i;
    }

    for (let i = 1; i < firstWordLength; i++) {
        for (let j = 1; j < secondWordLength; j++) {
            distance[i][j] = Math.min(
                distance[i][j - 1] + 1,
                distance[i - 1][j] + 1,
                distance[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1)
            );
        }
    }
    return distance[firstWordLength - 1][secondWordLength - 1];
};

minDistance("horse", "ros");


//Задача 80. Удаление дубликатов

const removeDuplicates = (nums) => {
    let counter = 0;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== nums[index - 1] && index != 0) {
            counter = 0;
        }
        if (counter > 1) {
            nums.splice(index, 1);
            index--;

        } else {
            counter++;
        }
    };

    return nums.length;
};

/* 120. Треугольник */
/** Начинаем сс предпоследней строки, последнего элемента в строке
 *  меняем каждое значение на сумму его и минимального из двух под ним стоящих
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = triangle[i].length - 1; j >= 0; j--) {
            triangle[i][j] = triangle[i][j] + Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle;
};
minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);


/*https://leetcode.com/problems/spiral-matrix-ii/*/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {

    const matrix = [...Array(n)].map(item => Array(n).fill(0));
    let x = 0, y = 0;
    for (let i = 1; i <= n * n; i++) {
        matrix[x][y] = i;
        if (matrix[x][y + 1] === 0 || y + 1 < n - 1) {
            y++;
        }
        // if (y + 1 >= n - 1 && matrix[x + 1][y] === 0) {
        //     x++;
        // }
    }
    return matrix
};

generateMatrix(3);

/* Поиск в ширину */
const graph = {
    A: ["B", "D"],
    B: ["A", "C", "E"],
    C: ["B"],
    D: ["A", "E"],
    E: ["B", "D", "F"],
    F: ["E"],
};

const bfs = (graph, start, end) => {
    if (!graph[start]) {
        throw Error("Нерпавильный начальный узел");
    }

    const queue = [{
        node: start,
        path: [start]
    }];

    const visited = {};

    while (!!queue.length) {
        const { node, path } = queue.shift();

        if (!!visited[node]) {
            continue;
        }

        visited[node] = true;

        if (node === end) {
            return path;
        }

        for (neighbor of graph[node]) {
            queue.push({
                node: neighbor,
                path: [...path, neighbor]
            });
        }
    }


    return null;


}

bfs(graph, "A", "K");

/****** Total sort 2 arrays *******/
const arr1 = [5, 6, 7, 12, 20, 21, 27];
const arr2 = [4, 8, 10, 11, 13, 24, 32];

const totalSort = (arr1, arr2) => {
    let i = 0, j = 0;
    let res = [];
    while (i < arr1.length || j < arr2.length) {
        if ((arr1[i] < arr2[j] || arr2[j] === undefined) && arr1[i] != undefined) {
            res.push(arr1[i]);
            i++;
        }
        if ((arr1[i] > arr2[j] || arr1[i] === undefined) && arr2[j] != undefined) {
            res.push(arr2[j]);
            j++;
        }
    }
    return res;
};

totalSort(arr1, arr2);


/*https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150*/

const prices = [3, 2, 6, 5, 0, 3];

const maxProfit = (prices) => {
    let min = 0, result = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[min] && i !== prices.length - 1) {
            min = i;
        }
        if (prices[min] < prices[i] && prices[i] - prices[min] > result) {
            result = prices[i] - prices[min];
        }
    }

    return result;
}

maxProfit(prices);

/*https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150*/

const prices2 = [1, 2, 3, 4, 5];

const maxProfit2 = (prices) => {
    let min = 0, result = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[min] && i !== prices.length - 1) {
            min = i;
        }
        if (prices[min] < prices[i]) {
            result = result + prices[i] - prices[min];
            min = i;

        }
    }

    return result;
}

maxProfit2(prices2);

/* https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150 */

const nums = [2, 3, 1, 1, 4];

const canJump = (nums) => {
    let end = nums.length - 1;
    if (nums.length === 1) return true;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= end) {
            end = i;
        }
    }

    if (end === 0) {
        return true;
    }

    return false;
}

canJump(nums);

/* Сортировка */

/* Сортировка пузырьковая О(n2) 13 перестановок при исходном массиве Самый медленный */
/** Проходимся по каждому элементу массива от начала до конца, если элемент большой - всплывает в самый верх.
 * Повторяем процедуру, но теперь не трогаем последний элемент, так как он отсортирован. И так до конца
 */

const unsortedArray1 = [2, 7, 12, 4, 5, 10, 1, 9];
const bubbleSort = (arr) => {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr;
}

bubbleSort(unsortedArray1);

/* Сортировка выбором О(n2) 5 перестановок при исходном массиве */
/* В цикле находим самый маленький элемент массива. Ставим в начало (либо со сдвигом, либо просто меняя местами с первым)
Повторяем поиск, но теперь не трогаем первый отсортированный элемент так до конца */

const unsortedArray2 = [2, 7, 12, 4, 5, 10, 1, 9];
const selectionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                arr.splice(i, 0, arr[j]);
                arr.splice(j + 1, 1);
                /** OR 
                [arr[i], arr[j]] = [arr[j], arr[i]];
                */
            }
        }
    }
    return arr;
}

selectionSort(unsortedArray2);

/* Сортировка вставками */
/* Условно массив делится на сортированную, и не сортированную часть. На старте в сортированной первый элемент, в несортированной- остальной
Берем из второй части первый элемент, и проходимся по сортированной с конца. Пока он меньше элементов оттуда, они двигаются вправа. 
Как только это не так, элемент вставляется. Берется следующий несортированный и так далее  */

const unsortedArray3 = [2, 7, 12, 4, 5, 10, 1, 9];
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];

            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

insertionSort(unsortedArray3);


/* Сортировка подсчетом. Только целочисленная */

const unsortedArray4 = [2, 7, 12, 4, 5, 10, 4, 1];

const countingSort = (arr) => {
    let res = [];

    const nums = arr.reduce((acc, item) => {
        acc[item] = acc[item] == null ? 1 : acc[item] + 1;
        return acc;
    }, {});


    for (let num in nums) {
        for (let i = 0; i < nums[num]; i++) {
            res.push(Number(num));
        }

    }

    return res;
}

countingSort(unsortedArray4);

/* Сортировка слиянием  O(n* Log n))*/
/* https://thecode.media/merge-sort/ */
const unsortedArray5 = [2, 7, 12, 4.3, 5, 10, 4, 1];

const merge = (first, second) => {
    const res = [];
    let i = j = 0;

    while (i < first.length && j < second.length) {
        res.push(first[i] < second[j] ? first[i++] : second[j++]);
    }
    return [...res, ...first.slice(i), ...second.slice(j)];
    //спред для того, чтобы не терялись элементы, если длина массивов не совпадает
}

const mergeSort = (arr) => {
    let mid = Math.floor(arr.length / 2);

    if (!arr || !arr.length) {
        return null;
    }

    if (arr.length <= 1) {
        return arr;
    }

    let left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length);


    return merge(mergeSort(left), mergeSort(right));
}

mergeSort(unsortedArray5);


const TOTAL_CUBE_COUNT = 2;
const MAX_DOT_COUNT = 6;

const cubeCombinationProbability = (cubeCount) => {
    const cubeValues = [];
    const combinationWithSum = [];
    let combinationsCount;

    const loop = (currentCubeIndex) => {
        if (currentCubeIndex > 0) {
            for (let i = 1; i <= MAX_DOT_COUNT; i++) {
                cubeValues[currentCubeIndex - 1] = i;
                loop(currentCubeIndex - 1);

                if (currentCubeIndex === 1) {
                    combinationsCount++;
                    const sumValue = cubeValues.reduce((acc, a) => acc += a, 0);
                    combinationWithSum[sumValue] = combinationWithSum[sumValue] ? combinationWithSum[sumValue] + 1 : 1;
                }
            }
        }
        return cubeValues;
    }
    loop(cubeCount);
    return combinationWithSum;
    return combinationWithSum.map(item => item / combinationsCount);
}


cubeCombinationProbability(TOTAL_CUBE_COUNT);


/* K sorted arrays*/
/*https://leetcode.com/problems/merge-k-sorted-lists/submissions/1290186219/*/
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const lists = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6))
];

const mergeKLists = (lists) => lists.reduce((res, list) => mergeTwoList(res, list), null);

const mergeTwoList = function (list1, list2) {
    if (list1 == null)
        return list2;
    if (list2 == null)
        return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoList(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoList(list1, list2.next);
        return list2;
    }
}

mergeKLists(lists);



/* 141. Linked List Cycle */
/*https://leetcode.com/problems/merge-k-sorted-lists/submissions/1290186219/*/
let one = new ListNode(3);
let two = new ListNode(5);
let three = new ListNode(9);
let four = new ListNode(11);
let five = new ListNode(9);
let six = new ListNode(11);


one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = two;

const hasCycle = (head) => {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;
};

hasCycle(one);



/*2. Add Two Numbers*/
/**https://leetcode.com/problems/add-two-numbers/ */

const first = new ListNode(9, new ListNode(9, new ListNode(9)));
const second = new ListNode(9, new ListNode(9));

const addTwoNumbers = (l1, l2) => {
    let tempNode = new ListNode();
    let res = tempNode; // так как нужно сохранить ссылку на начальный узел, иначе будет все затираться
    let current1 = l1, current2 = l2;
    let buffer = 0, sum = 0;

    while (!!current1 || !!current2 || buffer) {
        sum = buffer + (current1?.val ?? 0) + (current2?.val ?? 0);

        current1 = current1?.next ?? null;
        current2 = current2?.next ?? null;

        buffer = Math.floor(sum / 10);
        tempNode.next = new ListNode(sum % 10);
        tempNode = tempNode.next;
    }

    return res.next;
};

addTwoNumbers(first, second);


/* 206. Reverse Linked List */
/* https://leetcode.com/problems/reverse-linked-list/description/ */

const list = new ListNode(1, new ListNode(4, new ListNode(5)));

const reverseList = (head) => {
    if (!head?.next) {
        return head;
    }

    const res = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
};

reverseList(list);



/* 704. Binary Search */
/* https://leetcode.com/problems/binary-search/description/ */
const array = [-1, 0, 3, 5, 9, 12];
const target = 9;

const binarySearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            start = mid + 1;
        }

        if (nums[mid] > target) {
            end = mid - 1;
        }


    }

    return -1;
};

binarySearch(array, target);

/* 374. Guess Number Higher or Lower */
/* https://leetcode.com/problems/guess-number-higher-or-lower/description/ */

const guessNumber = (n) => {
    let start = 0;
    let end = n;
    let mid;

    while (start <= end) {
        mid = Math.floor((end + start) / 2);
        const guessResponse = guess(mid);
        if (guessResponse == -1) {
            end = mid - 1;
        }
        if (guessResponse == 1) {
            start = mid + 1;
        }

        if (guessResponse == 0) {
            return mid;
        }
    }
};

/* 74. Search a 2D Matrix */
/* https://leetcode.com/problems/search-a-2d-matrix/ */

const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const targetValue = 4;

const searchMatrix = (matrix, target) => {
    const columns = matrix[0].length;
    let start = 0;
    let end = matrix.length * columns - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const midRow = Math.floor(mid / columns);
        const midColumn = mid % columns;

        if (matrix[midRow][midColumn] < target) {
            start = mid + 1;
        }

        if (matrix[midRow][midColumn] > target) {
            end = mid - 1;
        }

        if (matrix[midRow][midColumn] === target) {
            return true;
        }
    }


    return false;
};

searchMatrix(matrix, targetValue);


/* 33. Search in Rotated Sorted Array */
/* https://leetcode.com/problems/search-in-rotated-sorted-array */

const numsRotated = [4, 5, 6, 7, 0, 1, 2];
const targetNum = 0;

/**Какая то из половин обязательно отсортирована,  определяем какая.
 * Проверяем, входит ли число в отсортированный интервал, если да, то им и ограничиваемся. Нет - исключаем и ищем в другой части */

const searchRotatedSorted = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[start] <= nums[mid]) {
            if (nums[mid] > target && target >= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }


    return -1;
};

searchRotatedSorted(numsRotated, targetNum);



/* 153. Find Minimum in Rotated Sorted Array */
/* https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/ */
const nums1 = [3, 4, 5, 1, 2];

const findMin = (nums) => {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] < nums[end]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return nums[start];
};

findMin(nums1);


/* 153. Find Minimum in Rotated Sorted Array */
/* https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/ */

const numsRotated2 = [4, 5, 6, 7, 0, 0, 1, 2];
const targetNum2 = 0;

const searchRotatedSorted2 = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return true;
        }

        if (nums[start] === nums[mid]) {
            start++;
            continue;
        }

        if (nums[start] <= nums[mid]) {
            if (nums[mid] > target && target > nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (nums[mid] < target && target < nums[end]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }


    return false;
};

searchRotatedSorted2(numsRotated2, targetNum2);


/* 136. Single Number */
/* https://leetcode.com/problems/single-number/description/ */
/* XOR с нулем равен самому числу, а XOR одинаковых чисел = 0 */

var singleNumber = function (nums) {
    let unique = 0;
    nums.forEach((num) => {
        unique = unique ^ num;
    })
    return unique;
};

singleNumber([4, 1, 2, 1, 2]);

/* 49. Group Anagrams */
/* https://leetcode.com/problems/group-anagrams/description/ */
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = (strs) => {
    const res = new Map();
    let key;
    strs.forEach((str) => {
        key = str.split("").sort().join("");
        if (res.has(key)) {
            res.get(key).push(str);
        } else {
            res.set(key, [str]);
        }
    });

    return Array.from(res.values());
};

groupAnagrams(strs);


/* 242. Valid anagram */
/* https://leetcode.com/problems/valid-anagram/ */

const s = "aacc", t = "ccca";

const isAnagram = (s, t) => {
    //return s.split("").sort().join("") === t.split("").sort().join("");
    const map = new Map();
    let res = true;

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) ?? 0) + 1)
    }

    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) ?? -1) - 1)
    }

    map.forEach((val) => res = (val === 0));

    return res;
};

isAnagram(s, t);


/* 438. Find All Anagrams in a String */
/* https://leetcode.com/problems/find-all-anagrams-in-a-string/description/ */

const s1 = "cbaebabacd", p1 = "abc";

// const getPreparedKey = (str) => str.split("").sort().join("");

// const findAnagrams = (s, p) => {
//     const map = new Map();
//     const anagramLength = p.length;
//     const anagramKey = getPreparedKey(p);
//     let key;

//     for (let i = 0; i <= s.length - anagramLength; i++) {
//         key = getPreparedKey(s.slice(i, i + anagramLength));

//         if (map.has(key)) {
//             map.get(key).push(i);
//         } else {
//             map.set(key, [i]);
//         }
//     }

//     return map.get(anagramKey) ?? [];
// };

const findAnagrams = (s, p) => {
    let count = p.length;
    let left = 0, right = 0;
    let res = [];

    const anagramSymbols = p.split("").reduce((acc, symbol) => {
        acc[symbol] ? acc[symbol]++ : acc[symbol] = 1;
        return acc;
    }, {});

    let temp = { ...anagramSymbols };


    while (right < s.length) {
        if (temp[s[right]] > 0) {
            temp[s[right]]--;
            right++;
            count--;
        } else {
            ++left;
            right = left;
            count = p.length;
            temp = { ...anagramSymbols };
        }

        if (count === 0) {
            res.push(left);
        }
    }

    return res;
};

findAnagrams(s1, p1);


/* 20. Valid Parentheses */
/* https://leetcode.com/problems/valid-parentheses/description/ */

const s3 = "()";
const brackets = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
]);

const isValid = (s) => {
    const queue = [];

    for (let i = 0; i < s.length; i++) {
        if (brackets.get(queue[queue.length - 1]) === s[i]) {
            queue.pop();
            continue;
        }

        queue.push(s[i]);
    }

    return !queue.length;
};

isValid(s3);


/* 18. 4Sum */
/* https://leetcode.com/problems/4sum/ */
const nums3 = [1, 0, -1, 0, -2, 2], target3 = 0;

const fourSum = (nums, target) => {

};

fourSum(nums3, target3);




/* 714. Best Time to Buy and Sell Stock with Transaction Fee */
/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/ */
// const prices3 = [1, 3, 2, 8, 4, 9];
// const fee = 2;

// const maxProfit3 = (prices, fee) => {
//     let min = 0;
//     let profit = 0;
//     let canBuy = true;
//     for (let i = 0; i < prices.length; i++) {                //НЕВЕРНОЕ РЕШЕНИЕ
//         if (prices[i] <= prices[min] && canBuy) {
//             min = i;
//             canBuy = false;
//         }

//         if (prices[i] > prices[min] + fee) {
//             profit += prices[i] - fee - prices[min];
//             canBuy = true;

//             if (i + 1 < prices.length - 1) {
//                 min = i + 1;
//             }
//         }
//     }

//     return profit;
// };

// console.log(maxProfit3(prices3, fee));

/* 56. Merge Intervals */
/* https://leetcode.com/problems/merge-intervals/description/ */

const interfals = [[1, 3], [8, 10], [9, 10], [15, 18], [2, 6]];

const merge1 = (intervals) => {
    const res = [];
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {
        if (!res.length || (!!res.length && intervals[i][0] > res[res.length - 1][1])) {
            res.push(intervals[i]);
        }

        if (!!res.length && intervals[i][0] <= res[res.length - 1][1] && intervals[i][0] <= res[res.length - 1][1]) {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
        }
    }

    return res;
};

merge1(interfals);


/* https://leetcode.com/problems/same-tree/description/ */
/* 100. Same Tree */

function TreeNodeLeaf(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const tree1 = new TreeNodeLeaf(1, new TreeNodeLeaf(2), new TreeNodeLeaf(3));
const tree2 = new TreeNodeLeaf(1, new TreeNodeLeaf(2), new TreeNodeLeaf(3));

const isSameTree = (p, q) => {
    if (!p && !q) {
        return true;
    }

    if (p && q && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

    return false;
};

isSameTree(tree1, tree2);


/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/ */
/* 309. Best Time to Buy and Sell Stock with Cooldown */

const prices3 = [1, 2, 3, 0, 2];
const maxProfit3 = (prices) => {
    let hold = -prices[0], sold = 0, rest = 0;
    for (let i = 1; i < prices.length; i++) {
        let nextHold = Math.max(hold, rest - prices[i]);
        let nextSold = hold + prices[i];
        let nextRest = Math.max(rest, sold);
        hold = nextHold;
        sold = nextSold;
        rest = nextRest;
    }
    return Math.max(sold, rest);
};

maxProfit3(prices3);


/* https://leetcode.com/problems/balanced-binary-tree/description/ */
/* 110. Balanced Binary Tree */

// const tree11 = new TreeNodeLeaf(3, new TreeNodeLeaf(9), new TreeNodeLeaf(20, new TreeNodeLeaf(15), new TreeNodeLeaf(7)));
// const tree21 = new TreeNodeLeaf(1, new TreeNodeLeaf(2), new TreeNodeLeaf(2, new TreeNodeLeaf(3, new TreeNodeLeaf(4), new TreeNodeLeaf(4)), new TreeNodeLeaf(3)));

// const isBalanced = (root) => {
//     let left = 0, right = 0;
//     const dfs = (node) => {
//         if (!node) {
//             return 0;
//         }
//         console.log(node, left, right);                      // Неверное решение
//         if(!!node?.left) {
//             left = dfs(node?.left)?.left ?? 0 + 1; 
//         }
//         right = dfs(node?.right)?.right ?? 0 + 1;
//         return { left, right };
//     }
//     dfs(root);

//     return Math.abs(left - right) <= 1;
// };

// console.log(isBalanced(tree11));
