for (let i = 1; i <= 10; i++) {
    console.log("i = ", i);
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Vòng lặp forEach
  const result = numbers.forEach((value, index) => {
    console.log("Value - index: ", value, index);
  });
  
  // Tìm kiếm các phần tử chẵn và trả về mảng các phần tử đấy
  // let evenNumbers = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] % 2 === 0) {
  //     evenNumbers.push(numbers[i]);
  //   }
  // }
  
  // console.log(evenNumbers);
  
  // Hàm filter: Dùng để lặp qua các phần tử của mảng. Trả về 1 mảng mới chứa các phần tử thỏa mãn điều kiện
  // Nếu không có phần tử nào thỏa mãn thì nó trả về []
  const evenNumbers = numbers.filter((value, index) => value % 2 === 0);
  
  // Tìm kiếm một phần tử bất kỳ trong mảng
  const findNumber = numbers.find((value) => value === 1);
  console.log("findNumber: ", findNumber);
  
  // Hàm map(): Dùng để lặp qua các phần tử của mảng. Trả về một mảng mới, có số lượng phần tử bằng với số lượng
  // phần tử của mảng cũ, nhưng đã được chỉnh sửa
  
  const newArray = numbers.map(
    (value, index) => `Tại vị trí thứ ${index} thì giá trị là ${value}`
  );
  
  const students = ["Nguyễn Văn Nam", "Trần Văn Tâm", "Lê Anh Dương"];
  
  // Fill tất cả các phần tử trên vào trong 1 danh sách ul, li
  const htmls = students.map((value, index) => {
    return `
          <li>${value}</li>
      `;
  });
  
  // Hàm reduce
  const carts = [100, 200, 300, 400, 500];
  
  let total = 0; // Biến lưu trữ
  
  for (let i = 0; i < carts.length; i++) {
    console.log("Tại vị trí thứ " + i + " total = ", total);
  
    total += carts[i];
  }
  
  // const totalCart = carts.reduce((previousValue, currentValue, index) => {
  //   console.table(index, previousValue, currentValue);
  //   return previousValue + currentValue;
  // }, 0);
  
  const totalCart = carts.reduce(
    (previousValue, currentValue, index) => previousValue + currentValue,
    0
  );
  
  const scores = [2, 3, 6, 8, 10];
  
  // Kiểm tra xem mảng scores có tất cả các phần tử là phần tử chẵn không => trả về đúng
  const checkAllEven = scores.every((value) => value % 2 === 0);
  console.log("checkEven: ", checkAllEven);
  
  // Kiểm tra xem mảng scores chỉ cần có ít nhất 1 phần tử là phần tử chẵn => trả về đúng
  const checkOneEven = scores.some((value) => value % 2 === 0);
  console.log("checkOneEven: ", checkOneEven);
  
  // Fill
  // scores.fill(0, 0, scores.length);
  
  // console.log("scores: ", scores);
  
  // includes
  const findScore = scores.includes(3);
  
  // Hàm concat() => Dùng để nối mảng
  const firstNumbers = [1, 2, 3, 4, 5];
  const secondNumbers = [6, 7, 8, 9, 10];
  
  const mergedArray = secondNumbers.concat(firstNumbers).sort((a, b) => a - b);
  
  // split() - Chuyển đổi chuỗi thành mảng & join() - CHuyển đổi mảng thành chuỗi
  const company = "Rikkei Education 1";
  
  const resultConvertArray = company.split(" "); // Chuyển đổi chuỗi thành mảng
  
  const resultConvertString = resultConvertArray.join(" - ");
  
  console.log("resultConvertArray: ", resultConvertArray);
  console.log("resultConvertString: ", resultConvertString);
  
  const email = "demo@gmail.com";
  
  // Nếu email không bắt đầu với "demo", không chứa ký tự "@" và không kết thúc với định dạng ".com" => sai
  console.log(email.startsWith("demo"));
  console.log(email.includes("@"));
  console.log(email.endsWith(".com"));