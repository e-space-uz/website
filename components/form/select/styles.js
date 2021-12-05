export const selectStyles = (props) => ({
    container: (styles) => ({
        ...styles,
        minWidth: 100,
        width: '100%',
    }),
    control: (styles, { isDisabled, isFocused }) => ({
        ...styles,
        borderColor: '#e5e9eb',
        backgroundColor: isDisabled
            ? '#F6F8F9'
            : props.hasValue
            ? '#0E73F6'
            : 'white',
        width: props?.inline ? 'auto' : '100%',
        minHeight: 40,
        borderRadius: 6,
        borderWidth: props.noBorder ? '0' : 1,
        // '&:hover': {
        ...(isFocused && { borderColor: '#0E73F6' }),
        // },
        '& svg, & svg path': {
            ...(props.hasValue && { fill: '#fff', fillOpacity: 1 }),
        },
    }),
    option: (styles, { isDisabled, isSelected }) => ({
        ...styles,
        backgroundColor: '#fff',
        fontSize: '14px',
        lineHeight: '24px',
        color: isDisabled ? '#ccc' : '#000',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        boxShadow: 'inset 0px -1px 0px rgba(0, 0, 0, 0.07)',
        '&:nth-last-of-type(1)': {
            boxShadow: 'none',
        },
        '&:active': {
            color: isDisabled ? '#ccc' : isSelected ? '#0E73F6' : '#0E73F6',
            backgroundColor: !isDisabled && (isSelected ? '#fff' : '#eee'),
        },
    }),
    input: (styles) => ({
        ...styles,
        color: props.hasValue ? '#fff' : '#9AA6AC',
        fontSize: '14px',
        lineHeight: '24px',
    }),
    placeholder: (styles) => ({
        ...styles,
        color: props.hasValue ? '#fff' : '#9AA6AC',
        fontSize: '14px',
        lineHeight: '24px',
        whiteSpace: 'nowrap',
    }),
    singleValue: (styles) => ({
        ...styles,
        fontSize: '14px',
        lineHeight: '24px',
        color: props.hasValue ? '#fff' : '#000',
    }),
    menu: (styles) => ({
        ...styles,
        boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
        borderRadius: 12,
        width: 'max-content',
        minWidth: '100%',
        maxWidth: '300px',
        overflow: 'hidden',
    }),
    noOptionsMessage: (styles) => ({
        ...styles,
        fontSize: 14,
    }),
    menuList: (styles) => ({
        ...styles,
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: 5,
        },
        '&::-webkit-scrollbar-track': {
            background: '#fff',
            borderRadius: 4,
            margin: '2px 0',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#e8e8e8' /* color of the scroll thumb */,
            borderRadius: 4 /* roundness of the scroll thumb */,
        },
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    indicatorsContainer: (styles) => ({
        ...styles,
        opacity: props.hasValue ? '0' : '1',
    }),
})
