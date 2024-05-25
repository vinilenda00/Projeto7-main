import React, { useState } from "react";
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isSameDay } from 'date-fns';

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 150px auto;
`

const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
`;

const BigSquare = styled.div`
    position: relative;
    width: 60vw;
    height: 60vh;
    background-color: #EFEFEF;  
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    
`

const CalendarioContainer = styled.div`
    display: flex;
    width: 70%; 
    max-width: 400px;
    background-color: white;
    border-radius: 10px; 
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Sombra */
`

const Eventos = () => {
    const [date, setDate] = useState(new Date());

    const [events, setEvents] = useState([
        { date: new Date(2024, 4, 15), title: 'Evento 1', description: 'Descrição banco de  1' },
        { date: new Date(2024, 4, 20), title: 'Evento 2', description: 'Descrição do Evento 2' },
        { date: new Date(2024, 4, 17), title: 'banco de dados', description: 'banco de dados 3' },
        // Outros eventos...
    ]);

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <PageContainer>
            <MainContent>
                <BigSquare>
                    <CalendarioContainer>
                        <Calendar
                            onChange={onChange}
                            value={date}
                            tileContent={({ date, view }) => {
                                if (view === 'month') {
                                    const eventDates = events.map(event => new Date(event.date));
                                    return eventDates.some(eventDate => isSameDay(eventDate, date)) ? <div>Evento</div> : null;
                                }
                            }}
                        />
                    </CalendarioContainer>
                </BigSquare>
            </MainContent>
        </PageContainer>
    );
}

export default Eventos;
