import { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/calendario.css';

const Calendario = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [turnsData, setTurnsData] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editSlots, setEditSlots] = useState([
        { color: '#ffffff', text: '', size: 10, textColor: '#000000' },
        { color: '#ffffff', text: '', size: 10, textColor: '#000000' },
        { color: '#ffffff', text: '', size: 10, textColor: '#000000' }
    ]);
    const [copiedSlots, setCopiedSlots] = useState(null);
    const [paintMode, setPaintMode] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState(null);
    const [bottomMenu, setBottomMenu] = useState(null); // 'pintar', 'turnos', null
    const [savedFormats, setSavedFormats] = useState([]);

    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const daysOfWeek = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'];

    // Cargar datos del localStorage
    useEffect(() => {
        const savedData = localStorage.getItem('calendarTurnsData');
        if (savedData) {
            setTurnsData(JSON.parse(savedData));
        }

        const formats = localStorage.getItem('savedFormats');
        if (formats) {
            setSavedFormats(JSON.parse(formats));
        }
    }, []);

    // Guardar datos
    const saveData = (newData) => {
        setTurnsData(newData);
        localStorage.setItem('calendarTurnsData', JSON.stringify(newData));
    };

    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    // 0 = Lunes, ..., 6 = Domingo
    const getFirstDayOfMonth = (month, year) => {
        const day = new Date(year, month, 1).getDay();
        return (day === 0 ? 6 : day - 1);
    };

    const changeMonth = (offset) => {
        let newMonth = currentMonth + offset;
        let newYear = currentYear;

        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        } else if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }

        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    const handleDayClick = (day, month, year, isCurrentMonth = true) => {
        if (!isCurrentMonth) return;
        const dateKey = `${year}-${month}-${day}`;

        // Si está en modo pintar y hay un formato seleccionado
        if (paintMode && selectedFormat) {
            // Si el formato es ERASE, borrar el día
            if (selectedFormat === 'ERASE') {
                const newData = { ...turnsData };
                delete newData[dateKey];
                saveData(newData);
                return;
            }

            // Aplicar formato normal
            const newData = { ...turnsData, [dateKey]: JSON.parse(JSON.stringify(selectedFormat)) };
            saveData(newData);
            return;
        }

        // Modo normal: abrir editor
        setSelectedDate({ day, month, year, key: dateKey });

        if (turnsData[dateKey]) {
            setEditSlots([...turnsData[dateKey]]);
        } else {
            setEditSlots([
                { color: '#ffffff', text: '', size: 10, textColor: '#000000' },
                { color: '#ffffff', text: '', size: 10, textColor: '#000000' },
                { color: '#ffffff', text: '', size: 10, textColor: '#000000' }
            ]);
        }
        setIsModalOpen(true);
        setBottomMenu(null);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDate(null);
    };

    const handleSlotChange = (index, field, value) => {
        const newSlots = [...editSlots];
        newSlots[index] = { ...newSlots[index], [field]: value };
        setEditSlots(newSlots);
    };

    const addSlot = () => {
        setEditSlots([...editSlots, { color: '#ffffff', text: '', size: 10, textColor: '#000000' }]);
    };

    const removeSlot = (index) => {
        if (editSlots.length > 1) {
            const newSlots = editSlots.filter((_, i) => i !== index);
            setEditSlots(newSlots);
        }
    };

    const saveChanges = () => {
        if (!selectedDate) return;

        // Si es un turno nuevo (no tiene fecha)
        if (selectedDate.key === 'new-shift') {
            const newFormat = {
                id: Date.now(),
                name: editSlots[0]?.text || 'Sin nombre',
                slots: JSON.parse(JSON.stringify(editSlots))
            };
            const newFormats = [...savedFormats, newFormat];
            setSavedFormats(newFormats);
            localStorage.setItem('savedFormats', JSON.stringify(newFormats));
            closeModal();
            return;
        }

        // Si es edición de turno existente
        if (selectedDate.key.startsWith('edit-')) {
            const formatId = parseInt(selectedDate.key.replace('edit-', ''));
            const newFormats = savedFormats.map(f =>
                f.id === formatId
                    ? { ...f, slots: JSON.parse(JSON.stringify(editSlots)), name: editSlots[0]?.text || f.name }
                    : f
            );
            setSavedFormats(newFormats);
            localStorage.setItem('savedFormats', JSON.stringify(newFormats));
            closeModal();
            return;
        }

        // Modo normal: guardar en fecha específica
        const newData = { ...turnsData, [selectedDate.key]: editSlots };
        saveData(newData);

        // Auto-guardar formato único
        const hasContent = editSlots.some(slot => slot.text.trim() !== '');
        if (hasContent) {
            const formatExists = savedFormats.some(format =>
                JSON.stringify(format.slots) === JSON.stringify(editSlots)
            );
            if (!formatExists) {
                const newFormat = {
                    id: Date.now(),
                    name: editSlots[0]?.text || 'Sin nombre',
                    slots: JSON.parse(JSON.stringify(editSlots))
                };
                const newFormats = [...savedFormats, newFormat];
                setSavedFormats(newFormats);
                localStorage.setItem('savedFormats', JSON.stringify(newFormats));
            }
        }

        closeModal();
    };

    const clearDate = () => {
        if (selectedDate) {
            const newData = { ...turnsData };
            delete newData[selectedDate.key];
            saveData(newData);
            closeModal();
        }
    };

    const copySlots = () => {
        setCopiedSlots(JSON.parse(JSON.stringify(editSlots)));
        alert('Formato copiado correctamente');
    };

    const pasteSlots = () => {
        if (copiedSlots) {
            setEditSlots(JSON.parse(JSON.stringify(copiedSlots)));
            alert('Formato pegado correctamente');
        } else {
            alert('No hay formato copiado');
        }
    };

    const deleteFormat = (id) => {
        const newFormats = savedFormats.filter(f => f.id !== id);
        setSavedFormats(newFormats);
        localStorage.setItem('savedFormats', JSON.stringify(newFormats));
        if (selectedFormat && savedFormats.find(f => f.id === id && JSON.stringify(f.slots) === JSON.stringify(selectedFormat))) {
            setSelectedFormat(null);
            setPaintMode(false);
        }
    };

    const editShift = (format) => {
        setSelectedDate({ day: null, month: null, year: null, key: `edit-${format.id}` });
        setEditSlots(JSON.parse(JSON.stringify(format.slots)));
        setIsModalOpen(true);
        setBottomMenu(null);
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
        const days = [];

        // Obtener fecha actual
        const today = new Date();
        const todayDay = today.getDate();
        const todayMonth = today.getMonth();
        const todayYear = today.getFullYear();

        // Previous month filler days
        const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        const prevMonthDaysCount = getDaysInMonth(prevMonth, prevMonthYear);

        // Celdas mes anterior
        for (let i = 0; i < firstDay; i++) {
            const dayNum = prevMonthDaysCount - firstDay + i + 1;
            days.push(
                <div key={`prev-${i}`} className="day-cell other-month">
                    <span className="day-number">{dayNum}</span>
                </div>
            );
        }

        // Celdas mes actual
        for (let d = 1; d <= daysInMonth; d++) {
            const dateKey = `${currentYear}-${currentMonth}-${d}`;
            const dayData = turnsData[dateKey] || [
                { color: 'transparent', text: '' },
                { color: 'transparent', text: '' },
                { color: 'transparent', text: '' }
            ];

            // Verificar si es el día actual
            const isToday = d === todayDay && currentMonth === todayMonth && currentYear === todayYear;

            days.push(
                <div
                    key={d}
                    className="day-cell"
                    onClick={() => handleDayClick(d, currentMonth, currentYear)}
                >
                    <span className={`day-number ${isToday ? 'today' : ''}`}>{d}</span>
                    <div className="day-slots">
                        {dayData.map((slot, idx) => (
                            <div
                                key={idx}
                                className="day-slot"
                                style={{
                                    backgroundColor: slot.color !== '#ffffff' ? slot.color : 'transparent',
                                    color: slot.textColor || '#000000',
                                    fontSize: `${slot.size || 10}px`
                                }}
                            >
                                {slot.text}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        // Celdas mes siguiente (rellenar hasta 35 o 42 celdas para grid completo)
        const totalSlots = firstDay + daysInMonth;
        const nextMonthDays = 42 - totalSlots; // Always show 6 rows for stability

        for (let i = 1; i <= nextMonthDays; i++) {
            days.push(
                <div key={`next-${i}`} className="day-cell other-month">
                    <span className="day-number">{i}</span>
                </div>
            );
        }

        return days;
    };

    return (
        <div className="calendario-page">
            <Header />
            <div className="calendario-container">

                <div className="calendar-header">
                    <button className="nav-btn" onClick={() => changeMonth(-1)}>&lt;</button>
                    <h2>{months[currentMonth]} {currentYear}</h2>
                    <button className="nav-btn" onClick={() => changeMonth(1)}>&gt;</button>
                </div>

                <div className="month-view">
                    <div className="days-grid">
                        {daysOfWeek.map((day, i) => (
                            <div key={`header-${i}`} className="day-header">{day}</div>
                        ))}
                        {renderCalendar()}
                    </div>
                </div>

            </div>

            {/* Bottom Menu Bar */}
            <div className="bottom-menu-bar">
                <button
                    className={bottomMenu === 'pintar' ? 'active' : ''}
                    onClick={() => setBottomMenu(bottomMenu === 'pintar' ? null : 'pintar')}
                >
                    PINTAR
                </button>
                <button
                    className={bottomMenu === null ? 'active' : ''}
                    onClick={() => {
                        setBottomMenu(null);
                        setPaintMode(false);
                        setSelectedFormat(null);
                    }}
                >
                    EDITAR
                </button>
                <button
                    className={bottomMenu === 'turnos' ? 'active' : ''}
                    onClick={() => setBottomMenu(bottomMenu === 'turnos' ? null : 'turnos')}
                >
                    TURNOS
                </button>
            </div>

            {/* Formats Panel - PINTAR */}
            {bottomMenu === 'pintar' && (
                <div className="formats-panel">
                    <div className="formats-scroll">
                        {/* Opción BORRAR - siempre visible */}
                        <div
                            className={`format-card erase-card ${selectedFormat === 'ERASE' ? 'selected' : ''}`}
                            onClick={() => {
                                setSelectedFormat('ERASE');
                                setPaintMode(true);
                            }}
                        >
                            <div className="format-preview erase-preview">
                                <div style={{
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    padding: '8px',
                                    fontWeight: 'bold'
                                }}>
                                    BORRAR
                                </div>
                            </div>
                        </div>

                        {savedFormats.length === 0 ? (
                            <div style={{ padding: '20px', color: '#7f8c8d', textAlign: 'center', flex: 1 }}>
                                No hay formatos guardados. Crea un turno primero en la sección TURNOS.
                            </div>
                        ) : (
                            savedFormats.map(format => (
                                <div
                                    key={format.id}
                                    className={`format-card ${selectedFormat && JSON.stringify(selectedFormat) === JSON.stringify(format.slots) ? 'selected' : ''}`}
                                    onClick={() => {
                                        setSelectedFormat(format.slots);
                                        setPaintMode(true);
                                    }}
                                >
                                    <button
                                        className="format-delete-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteFormat(format.id);
                                        }}
                                        title="Eliminar formato"
                                    >
                                        ×
                                    </button>
                                    <div className="format-preview">
                                        {format.slots.map((slot, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    backgroundColor: slot.color !== '#ffffff' ? slot.color : 'transparent',
                                                    color: slot.textColor || '#000000',
                                                    fontSize: `${slot.size || 10}px`
                                                }}
                                            >
                                                {slot.text || '—'}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {/* Shifts Panel - TURNOS */}
            {bottomMenu === 'turnos' && (
                <div className="shifts-panel">
                    <div className="shifts-header">
                        <h3>TURNOS DISPONIBLES</h3>
                        <button
                            onClick={() => {
                                setIsModalOpen(true);
                                setEditSlots([
                                    { color: '#ffffff', text: '', size: 10, textColor: '#000000' },
                                    { color: '#ffffff', text: '', size: 10, textColor: '#000000' },
                                    { color: '#ffffff', text: '', size: 10, textColor: '#000000' }
                                ]);
                                setSelectedDate({ day: null, month: null, year: null, key: 'new-shift' });
                                setBottomMenu(null);
                            }}
                        >
                            + CREAR TURNO NUEVO
                        </button>
                    </div>
                    <div className="shifts-list">
                        {savedFormats.length === 0 ? (
                            <div style={{ padding: '20px', color: '#7f8c8d', textAlign: 'center' }}>
                                No hay turnos creados. Haz click en "+ CREAR TURNO NUEVO" para comenzar.
                            </div>
                        ) : (
                            savedFormats.map(format => (
                                <div key={format.id} className="shift-item">
                                    <div className="shift-preview">
                                        {format.slots.map((slot, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    background: slot.color !== '#ffffff' ? slot.color : 'transparent',
                                                    color: slot.textColor || '#000000',
                                                    fontSize: `${slot.size || 10}px`
                                                }}
                                            >
                                                {slot.text || '—'}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="shift-actions">
                                        <button
                                            onClick={() => editShift(format)}
                                            title="Editar turno"
                                        >
                                            ⋮
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {isModalOpen && selectedDate && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="editor-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>
                                {selectedDate.key === 'new-shift'
                                    ? 'Crear Nuevo Turno'
                                    : selectedDate.key.startsWith('edit-')
                                    ? 'Editar Turno'
                                    : `Editar ${selectedDate.day} de ${months[selectedDate.month]} ${selectedDate.year}`
                                }
                            </h3>
                            <button className="close-btn" onClick={closeModal}>&times;</button>
                        </div>

                        <div className="modal-body">
                            {editSlots.map((slot, index) => (
                                <div key={index} className="slot-editor">
                                    <div className="slot-header">
                                        <h4>Turno/Opción {index + 1}</h4>
                                        <button
                                            className="remove-slot-btn"
                                            onClick={() => removeSlot(index)}
                                            disabled={editSlots.length === 1}
                                            title="Eliminar esta opción"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    <div className="control-row">
                                        <input
                                            type="text"
                                            placeholder="Texto (ej: Franco, Guardia)"
                                            value={slot.text}
                                            onChange={(e) => handleSlotChange(index, 'text', e.target.value)}
                                        />
                                    </div>
                                    <div className="control-row">
                                        <label>Fondo:</label>
                                        <input
                                            type="color"
                                            value={slot.color}
                                            onChange={(e) => handleSlotChange(index, 'color', e.target.value)}
                                        />
                                        <div className="color-presets">
                                            {/* Preset colors for quick access - Extended Palette */}
                                            {[
                                                '#ffffff', '#e0e0e0', '#c0c0c0', '#808080', '#404040', '#000000', // Grayscale
                                                '#ffcccc', '#ff4444', '#ff0000', '#8b0000', // Reds
                                                '#ffda9e', '#ffa500', '#ff8c00', '#d2691e', '#8b4513', '#a52a2a', // Oranges/Browns
                                                '#ffffcc', '#ffff00', '#ffd700', // Yellows
                                                '#ccffcc', '#90ee90', '#00ff00', '#008000', '#006400', // Greens
                                                '#cce5ff', '#add8e6', '#00bfff', '#0000ff', '#000080', // Blues
                                                '#e5ccff', '#da70d6', '#ee82ee', '#ff00ff', '#800080', '#4b0082' // Violets/Purples
                                            ].map(c => (
                                                <div
                                                    key={c}
                                                    className="color-preset"
                                                    style={{ background: c }}
                                                    onClick={() => handleSlotChange(index, 'color', c)}
                                                    title={c}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="control-row">
                                        <label>Texto:</label>
                                        <input
                                            type="color"
                                            value={slot.textColor || '#000000'}
                                            onChange={(e) => handleSlotChange(index, 'textColor', e.target.value)}
                                        />
                                        <div className="color-presets">
                                            {[
                                                '#000000', '#404040', '#808080', '#ffffff', // Grayscale
                                                '#ff0000', '#8b0000', // Reds
                                                '#a52a2a', '#8b4513', // Browns
                                                '#008000', '#006400', // Greens
                                                '#0000ff', '#000080', // Blues
                                                '#800080', '#4b0082', // Purples
                                                '#ffa500' // Orange
                                            ].map(c => (
                                                <div
                                                    key={c}
                                                    className="color-preset"
                                                    style={{ background: c }}
                                                    onClick={() => handleSlotChange(index, 'textColor', c)}
                                                    title={c}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="control-row">
                                        <label>Tamaño:</label>
                                        <input
                                            type="number"
                                            min="8"
                                            max="20"
                                            value={slot.size}
                                            onChange={(e) => handleSlotChange(index, 'size', parseInt(e.target.value))}
                                        />
                                    </div>
                                </div>
                            ))}

                            <button className="add-slot-btn" onClick={addSlot}>
                                + Agregar Opción
                            </button>

                            <div className="modal-actions">
                                <button className="save-btn" onClick={saveChanges}>Guardar</button>
                                <button className="clear-btn" onClick={clearDate}>Limpiar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendario;
