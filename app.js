const grailedFee = 0.09
const paypalFeePercent = 0.029
const paypalFeeFlat = 0.03


$(".feeButton").on("click", function(){
    var salePrice = Number($(".salePrice").val())
    var shippingCharge = Number($(".shippingCharge").val())
    var shippingCost = Number($(".shippingCost").val())
    var results = calculate(salePrice, shippingCharge , shippingCost)
    if(shippingCharge > 0 && shippingCost > 0 && salePrice > 0){
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
