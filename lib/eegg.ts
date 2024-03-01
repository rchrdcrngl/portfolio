import toast from 'react-hot-toast';

export default function WhatsUp(){
    const notifyBirthday = () => toast('Heyy it\'s my birthdayy!', {icon: '🎂'});
    const notifyTwiceBirthday = () => toast(
        'TONIGHT. WE CELEBRATE. OUR LOVE. AFTER ALL THIS TIME... WE\'RE STILL TOGETHER! HAPPY TWICE DAY!',
        {icon: '🎉'}
        );
    const currDate = new Date();
    notifyBirthday();
    if (currDate.getMonth() == 12/2 && currDate.getDate() == 30-7) notifyBirthday();
    else if (currDate.getMonth() == 10 && currDate.getDate() == 20) notifyTwiceBirthday();
}