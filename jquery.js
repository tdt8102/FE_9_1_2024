// Tạo hộp thoại cảnh báo
function alertBox() {
    alert("Đây là một hộp thoại cảnh báo JavaScript đơn giản!");
  }
  
  // Tạo hộp thoại xác nhận
  function confirmBox() {
    var result = confirm("Bạn có muốn tiếp tục không?");
    if (result) {
      alert("Bạn đã chọn tiếp tục.");
    } else {
      alert("Bạn đã chọn không tiếp tục.");
    }
  }
  
  // Gọi các hàm
  alertBox();
  confirmBox();
  function promptBox() {
    var result = prompt("Bạn có bao nhiêu bài hát của Chuck Berry?");
    if (result) {
      alert("Bạn có " + result + " bài hát của Chuck Berry.");
    } else {
      alert("Bạn không có bài hát nào của Chuck Berry.");
    }
  }
  
  // Gọi hàm
  promptBox();
    