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
    const [paintMode, setPaintMode] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState(null);
    const [bottomMenu, setBottomMenu] = useState(null); // 'pintar', 'preestablecidos', 'turnos', null
    const [savedFormats, setSavedFormats] = useState([]);
    const [activeScheme, setActiveScheme] = useState(() => localStorage.getItem('calendarScheme') || '');

    // Esquemas preestablecidos
    const preestablecidos = {
        'Tercio I': [
            { color: '#4CAF50', text: 'Tercio I', size: 10, textColor: '#ffffff' },
            { color: '#81C784', text: 'Mañana', size: 10, textColor: '#000000' }
        ],
        'Tercio II': [
            { color: '#2196F3', text: 'Tercio II', size: 10, textColor: '#ffffff' },
            { color: '#64B5F6', text: 'Tarde', size: 10, textColor: '#000000' }
        ],
        'Tercio III': [
            { color: '#FF9800', text: 'Tercio III', size: 10, textColor: '#ffffff' },
            { color: '#FFB74D', text: 'Noche', size: 10, textColor: '#000000' }
        ],
        'Tercio IV': [
            { color: '#9C27B0', text: 'Tercio IV', size: 10, textColor: '#ffffff' },
            { color: '#BA68C8', text: 'Rotativo', size: 10, textColor: '#000000' }
        ],
        '4x1 4x2 Grupo A': [
            { color: '#F44336', text: '4x1 4x2', size: 10, textColor: '#ffffff' },
            { color: '#EF5350', text: 'Grupo A', size: 10, textColor: '#ffffff' }
        ],
        '4x1 4x2 Grupo B': [
            { color: '#E91E63', text: '4x1 4x2', size: 10, textColor: '#ffffff' },
            { color: '#EC407A', text: 'Grupo B', size: 10, textColor: '#ffffff' }
        ],
        '4x1 4x2 Grupo C': [
            { color: '#9C27B0', text: '4x1 4x2', size: 10, textColor: '#ffffff' },
            { color: '#AB47BC', text: 'Grupo C', size: 10, textColor: '#ffffff' }
        ],
        '12x2x2 Grupo I': [
            { color: '#00BCD4', text: '12x2x2', size: 10, textColor: '#ffffff' },
            { color: '#26C6DA', text: 'Grupo I', size: 10, textColor: '#000000' }
        ],
        '12x2x2 Grupo II': [
            { color: '#009688', text: '12x2x2', size: 10, textColor: '#ffffff' },
            { color: '#26A69A', text: 'Grupo II', size: 10, textColor: '#000000' }
        ]
    };

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

    const applyScheme4x1_4x2_GrupoB = () => {
        const newData = {};
        const franco = [
            { color: '#90ee90', text: 'Franco', size: 10, textColor: '#000000' }
        ];
        const guardia = [
            { color: '#E91E63', text: 'Guardia', size: 10, textColor: '#ffffff' }
        ];

        // Secuencia 4x2 4x1: 1F, 4G, 2F, 4G (total 11 días - ciclo completo)
        const sequence = [
            'franco',       // día 1
            'guardia',      // día 2
            'guardia',      // día 3
            'guardia',      // día 4
            'guardia',      // día 5
            'franco',       // día 6
            'franco',       // día 7
            'guardia',      // día 8
            'guardia',      // día 9
            'guardia',      // día 10
            'guardia'       // día 11
        ];

        let sequenceIndex = 0;

        // Recorrer todos los días del año
        for (let month = 0; month < 12; month++) {
            const daysInMonth = getDaysInMonth(month, currentYear);
            for (let day = 1; day <= daysInMonth; day++) {
                const dateKey = `${currentYear}-${month}-${day}`;
                const type = sequence[sequenceIndex % sequence.length];

                if (type === 'franco') {
                    newData[dateKey] = JSON.parse(JSON.stringify(franco));
                } else {
                    newData[dateKey] = JSON.parse(JSON.stringify(guardia));
                }

                sequenceIndex++;
            }
        }

        saveData(newData);
        localStorage.setItem('calendarScheme', '4x1 4x2 Grupo B');
        setActiveScheme('4x1 4x2 Grupo B');
        setBottomMenu(null);
        alert('Esquema 4x1 4x2 Grupo B aplicado a todo el año ' + currentYear);
    };

    const clearAllCalendar = () => {
        if (window.confirm('¿Estás seguro de que deseas borrar todos los turnos del calendario?')) {
            saveData({});
            localStorage.removeItem('calendarScheme');
            setActiveScheme('');
            alert('Calendario limpiado correctamente');
        }
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
                    <div className="month-title-wrapper">
                        <h2>{months[currentMonth]} {currentYear}</h2>
                        {activeScheme && <div className="active-scheme-label">{activeScheme}</div>}
                    </div>
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
                    className={bottomMenu === 'preestablecidos' ? 'active' : ''}
                    onClick={() => setBottomMenu(bottomMenu === 'preestablecidos' ? null : 'preestablecidos')}
                >
                    PREESTABLECIDOS
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

            {/* Preestablecidos Panel */}
            {bottomMenu === 'preestablecidos' && (
                <div className="preestablecidos-panel">
                    <div className="preestablecidos-header">
                        <h3>ESQUEMAS PREESTABLECIDOS</h3>
                        <button className="clear-calendar-btn" onClick={clearAllCalendar}>
                            🗑️ Limpiar Calendario
                        </button>
                    </div>
                    <div className="preestablecidos-grid">
                        {Object.entries(preestablecidos).map(([nombre, slots]) => (
                            <div
                                key={nombre}
                                className="preestablecido-item"
                                onClick={() => {
                                    if (nombre === '4x1 4x2 Grupo B') {
                                        applyScheme4x1_4x2_GrupoB();
                                    } else {
                                        setSelectedFormat(slots);
                                        setPaintMode(true);
                                        setBottomMenu('pintar');
                                    }
                                }}
                            >
                                <div className="preestablecido-preview">
                                    {slots.map((slot, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                backgroundColor: slot.color,
                                                color: slot.textColor,
                                                fontSize: `${slot.size}px`,
                                                padding: '5px',
                                                textAlign: 'center',
                                                borderRadius: '3px',
                                                marginBottom: '2px'
                                            }}
                                        >
                                            {slot.text}
                                        </div>
                                    ))}
                                </div>
                                <div className="preestablecido-name">{nombre}</div>
                                {nombre === '4x1 4x2 Grupo B' && (
                                    <div className="auto-apply-badge">Auto-aplica año completo</div>
                                )}
                            </div>
                        ))}
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
