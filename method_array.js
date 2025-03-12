for(let i=1;i<=10;i++){
    console.log("i=",i);
}

const numbers = [1,2,3,4,5,6,7,8,9,10];

// Vòng lặp forEach
const result = numbers.forEach((value,index) => {
    console.log("Value-index:",value,index);
});

// Tìm kiếm các phần tử chẵn và trả về các phần tử ấy
for (let i = 0; i < numbers.length; i++){
    if (number[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);

// Hàm filter: Dùng để lặp qua các phần tử của mảng.Trả về một mảng mới chứa các phần tử mà nó thỏa mãn điều kiện
// Nếu như không có phần tử nào mà nó điều kiện thỏa mãn thì nó trả về mảng rỗng []
numbers.filter((value,index) => value % 2 === 0 );

// Tìm kiếm một phần tử bát kì trong mảng
const findNumber = numbers.find((value) => value === 1 );
console.log("findNumber:",findNumber);

// Hàm map():dùng để lặp qua các phần tử của mảng.Trả về một mảng mới có số lượng phần tử bằng với số lượng phần tử mảng cũ nhưng đã được chỉnh sửa
const newwArray = numbers.map((value,index) => `Tại vị trí là ${value}`);
console.log("newArray",newArray);

const students = ["Nguyễn Văn Nam","Trần Văn Tâm","Lê Anh Dương"];

// Fill tất cả các phần tử trên vào trong một danh sách ul,li
students.map((value,index) => {
    return `
    <li>${value}</li>
    `;
});

console.log("html:",htmls);

// Hàm reduce
const carts = [100,200,300,400,500];

for ( let i = 0; i.carts.length; i++ ) {
    console.log("Tại vị trí thứ"+ i + "total = ",total);
    total += carts [i];
}

const totalCart = carts.reduce((previousValue,currentValue,index) => previousValue + currentValue, 0
);
console.log(totalCarts);