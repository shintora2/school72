// =========================================================================
// 🌟 ОФИЦИАЛЬНЫЙ КОНФИГЕНТ НАПОЛНЕНИЯ САЙТА СОШ №72 (ОБНОВЛЯТЬ ТУТ) 🌟
// =========================================================================

const SCHOOL_DATA_CONFIG = {
    // ---- 1. СПИСОК УЧИТЕЛЕЙ ПО КАФЕДРАМ ----
    // Учителя вписываются через запятую в кавычках. Карточки создаются сами!
    teachers: {
        gumanitarii: ["Абдыкадырова Асель Токтосуновна", "Иванова Мария Петровна", "Садыкова Назира Бековна"],
        estestvennye: ["Токтосунова Бактыгуль", "Эсеналиева Айнура"],
        fizikomatem: ["Орозобеков Эмир Бекович", "Петров Николай Алексеевич"],
        obshya: ["Асанов Алмаз"],
        iskystva: ["Касымов Урмат", "Муратов Бектур"],
        nacalnyhclass: ["Учитель 1-А класса", "Учитель 1-Б класса", "Учитель 1-В класса"]
    },

    // ---- 2. ЛЕНТА ДОСТИЖЕНИЙ ШКОЛЫ ----
    achievements: {
        ru: {
            olymp_2026: {
                title: "Призовые места на Республиканской олимпиаде",
                date: "2026 год",
                img: "dostijeniya/olymp.jpg", 
                text: "<p>Учащиеся старших классов нашей школы заняли первое и второе места на Республиканской олимпиаде по математике и физике.</p><p>Комиссия Министерства образования отметила высокий уровень подготовки.</p>"
            },
            sport_gold: {
                title: "Золотой кубок на чемпионате Бишкека по футболу",
                date: "2025 год",
                img: "dostijeniya/football.jpg",
                text: "<p>Сборная СОШ №72 по футболу завоевала золото среди общеобразовательных учреждений города Бишкек.</p>"
            }
        },
        kg: {
            olymp_2026: {
                title: "Республикалык олимпиададагы байгелүү орундар",
                date: "2026-жыл",
                img: "dostijeniya/olymp.jpg",
                text: "<p>Биздин мектептин жогорку класстарынын окуучулары математика жана физика боюнча олимпиадада биринчи орундарды ээлешти.</p>"
            },
            sport_gold: {
                title: "Бишкек шаарынын футбол боюнча чемпионатында Алтын кубок",
                date: "2025-жыл",
                img: "dostijeniya/football.jpg",
                text: "<p>№72 мектептин курама командасы Бишкек шаарынын орто мектептеринин арасында алтын медалга ээ болду.</p>"
            }
        },
        en: {
            olymp_2026: {
                title: "Prize Places at the National Science Olympiad",
                date: "Year 2026",
                img: "dostijeniya/olymp.jpg",
                text: "<p>High school students of our institution won first and second places in the Republican Olympiad.</p>"
            },
            sport_gold: {
                title: "Gold Cup at Bishkek Football Championship",
                date: "Year 2025",
                img: "dostijeniya/football.jpg",
                text: "<p>The football team of Secondary School №72 won the gold medal.</p>"
            }
        }
    },

    // ---- 3. ОФИЦИАЛЬНЫЕ НОВОСТИ ШКОЛЫ ----
    news: {
        ru: {
            meals: {
                title: "Организация горячего питания и питьевого режима в школе",
                date: "Май 2026",
                content: `<p>В соответствии с требованиями Министерства образования и науки КР и санитарно-эпидемиологическими нормами, в СОШ №72 проведена комплексная модернизация пищеблока.</p>`
            },
            tech: {
                title: "Развитие материально-технической базы и IT-классов",
                date: "Апрель 2026",
                content: `<p>В рамках реализации национальной программы цифровизации образования, администрация СОШ №72 завершила этап масштабного технического переоснащения образовательных лабораторий.</p>`
            }
        },
        kg: {
            meals: {
                title: "Мектепте ысык тамак-ашты жана ичүүчү суу режимин уюштуруу",
                date: "Май 2026",
                content: `<p>КР Билим берүү жана илим министрлигинин талаптарына ылайык, №72 орто мектебинде ашкана блогун комплекстүү модернизациялоо иштери жүргүзүлдү.</p>`
            },
            tech: {
                title: "Материалдык-техникалык базаны жана IT-класстарды модернизациялоо",
                date: "Апрель 2026",
                content: `<p>Билим берүүнү санариптештирүү программасынын алкагында №72 мектебинин администрациясы компьютердик класстарды кайра жабдууну аяктады.</p>`
            }
        },
        en: {
            meals: {
                title: "Organization of Hot Meals and Drinking Water Regime in the School",
                date: "May 2026",
                content: `<p>In accordance with the requirements of the Ministry of Education and Science of the KR, a comprehensive modernization of the food unit was carried out at Secondary School №72.</p>`
            },
            tech: {
                title: "Modernization of Material-Technical Base and IT Classrooms",
                date: "April 2026",
                content: `<p>As part of the national program for digitalization of education, the administration of school №72 completed a large-scale upgrade of its computing facilities.</p>`
            }
        }
    }
};