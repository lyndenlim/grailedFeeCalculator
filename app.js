const grailedFee = 0.09
const paypalFeePercent = 0.029
const paypalFeeFlat = 0.03


$(".feeButton").on("click", function(){
    var results = (calculate(Number($(".salePrice").val()), Number($(".shippingCharge").val()), Number($(".shippingCost").val())))
    if(results[0] > 0 && results[1] > 0 && results[2] > 0){
        $(".grailedFee").text(`$${results[0].toFixed(2)}`)
        $(".paypalFee").text(`$${results[1].toFixed(2)}`)
        $(".total").text(`$${results[2].toFixed(2)}`);
    } else {
        alert("Please enter a number greater than 0.")
    }
})

function calculate(salePrice, shippingCharge, shippingCost){
    var totalGrailedFee = salePrice * grailedFee
    var totalPaypalFee = salePrice * paypalFeePercent + paypalFeeFlat
    var totalFee = totalGrailedFee + totalPaypalFee - shippingCharge + shippingCost
    var received = salePrice - totalFee
    return [totalGrailedFee, totalPaypalFee, received]
}
