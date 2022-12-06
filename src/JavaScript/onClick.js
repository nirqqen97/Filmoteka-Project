import onBtnQueueClick from './onBtnQueueClick'
import onWatchedClick from './onBtnWatchedClick' 

export default function onClick(){
const queueBtn = document.querySelector('.modal__add-to-queueu')
queueBtn.addEventListener('click', onBtnQueueClick)

const watchedBtn = document.querySelector('.modal__add-to-watched')
watchedBtn.addEventListener('click', onWatchedClick)

}

