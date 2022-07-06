import './App.css';

export default function Days(props){
    let datetime = new Date();
    const days = [
        datetime.getDay(),
        datetime.getDay() +1,
        datetime.getDay() +2,
        datetime.getDay() +3,
        datetime.getDay() +4
    ]

    return (
        <div className="card-action">
        {days.map((day, index) =>{

    switch (day) {
        case 0:
            day = "Dimanche";
            break;
        case 1:
            day = "Lundi";
            break;
        case 2:
            day = "Mardi";
            break;
        case 3:
            day = "Mercredi";
            break;
        case 4:
            day = "Jeudi";
            break;
        case 5:
            day = "Vendredi";
            break;
        case 6:
            day = "Samedi";
            break;
        case 7:
            day = "Dimanche";
            break;
}
return (
    <div key={index} className="day">
        <a className={index === 0 ? "day Active" : "day"} href={"#"} id={index} onClick={() => props.updateDay(index)}><span className="day-name">{day}</span></a>
    </div>
);
        })}
        </div>
    );

}