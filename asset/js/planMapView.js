
function showQueueModal() {
    $('.queue-modal-container').css('display','table')
    $('.gm-ui-hover-effect').click()
}
function closeQueueModal() {
    $('.queue-modal-container').hide()
}
function showConfirmModal() {
    $('.queue-modal-container').hide()
    $('.confirm-modal-container').css('display','table')
}
function goGameSpace(){
    window.location.href = './gameSpace.html'
}
function colseConfirmModal(){
    $('.confirm-modal-container').hide()
    $('.other-modal-container').css('display','table')
}
function closeOtherModal(){
    $('.other-modal-container').hide()
}