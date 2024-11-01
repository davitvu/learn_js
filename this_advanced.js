/** Strict Mode
 *  - Strict Mode là chế độ nghiêm ngặt, khi kích hoạt chế độ nghiêm ngặt thì JS sẽ áp dụng các quy tắc chặt chẽ hơn.

 *  - cú pháp: "use strict" - viết ở dòng đầu tiên nếu muốn toàn bộ file code đều nghiêm ngặt hoặc được chỉ định.

 *  - chỉ định "use strict"
    vd:
    function sayHi() {
        "use strict"
        // code ở đây sẽ tuân theo strict mode
    }
*/

/**     *Global Context* */
// console.log(this); // (console) => window

/** NOTE
    - Trong ngữ cảnh là toàn cục thì "this" trỏ tới đối tượng là toàn cục. Trong trình duyệt đối tượng là windows, trong Nodejs là global.
*/

/**     *Function Context*
 *  - Trong 1 hàm thông thường, giá trị của "this" *phụ thuộc* vào cách mà hàm được gọi.
*/

/** Hàm được gọi thông thường */
// function showThis() {
//     console.log(this); // (console) => window
// }

/** Hàm được gọi thông thường (sử dụng strict mode) */
// function showThis() {
//     console.log(this); // (console) => undefined
// }

// showThis();

/**        NOTE
 *  - Là một hàm thông thường "this" sẽ được trỏ tới đối tượng toàn cục (hoặc sẽ là undefined nếu sử dụng strict mode).
*/

/** Phương thức của đối tượng */
// const pet = {
//     name: "mew",
//     showThis: function() {
//         console.log(this); // (console) => (đối tượng)pet
//     }
// };

// pet.showThis();

/**        NOTE 
 *  - Khi một hàm được gọi từ một phương thức thì "this" trỏ tới đối tượng đó.
*/

/**     *Constructor functions*      */
// function Pet(name) {
//     this.name = name;
//     this.showThis = function() {
//         console.log(this);
//     }
// }

// const pet = new Pet("mew");

// console.log(pet.name); // (console) => mew
// pet.showThis(); // (console) => (đối tượng)pet

/**
 *  - Khi một hàm khởi tạo được gọi bằng "new", "this" trỏ tới đối tượng mới được tạo ra.
 */

/**    *Arrow Function* */
const pet = {
    name: "mew",
    showThis: function() {
        const innerFunction = () => {
            console.log(this);
        }
        innerFunction();
    }
}

pet.showThis().innerFunction(); // (console) => pet

/**        NOTE
 *  - Arrow Function không có "this" của riêng nó, mà nó kế thừa "this" từ phạm vi nơi nó được định nghĩa.
 *  - Trong bối cảnh trên this trong phương thức innerFunction() được lấy từ phương thức showThis() (là phương thức(phạm vi) bao quanh nó). "this" trong showThis() tham chiếu tới pet, tức là đối tượng pet.
 */