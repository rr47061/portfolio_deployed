/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const suggestions = [
    { label: 'Afghanistan' , value: '144' },
    { label: 'Aland Islands',value: '145' },
    // { label: 'Albania' },
    // { label: 'Algeria' },
    // { label: 'American Samoa' },
    // { label: 'Andorra' },
    // { label: 'Angola' },
    // { label: 'Anguilla' },
    // { label: 'Antarctica' },
    // { label: 'Antigua and Barbuda' },
    // { label: 'Argentina' },
    // { label: 'Armenia' },
    // { label: 'Aruba' },
    // { label: 'Australia' },
    // { label: 'Austria' },
    // { label: 'Azerbaijan' },
    // { label: 'Bahamas' },
    // { label: 'Bahrain' },
    // { label: 'Bangladesh' },
    // { label: 'Barbados' },
    // { label: 'Belarus' },
    // { label: 'Belgium' },
    // { label: 'Belize' },
    // { label: 'Benin' },
    // { label: 'Bermuda' },
    // { label: 'Bhutan' },
    // { label: 'Bolivia, Plurinational State of' },
    // { label: 'Bonaire, Sint Eustatius and Saba' },
    // { label: 'Bosnia and Herzegovina' },
    // { label: 'Botswana' },
    // { label: 'Bouvet Island' },
    // { label: 'Brazil' },
    // { label: 'British Indian Ocean Territory' },
    // { label: 'Brunei Darussalam' },
].map(suggestion => ({
    value: suggestion.value,
    label: suggestion.label,
}));

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function Control(props) {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
            {...props.selectProps.textFieldProps}
        />
    );
}

function Option(props) {
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function Placeholder(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
            {props.children}
        </Typography>
    );
}

function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

// function MultiValue(props) {
//     return (
//         <Chip
//             tabIndex={-1}
//             label={props.children}
//             className={classNames(props.selectProps.classes.chip, {
//                 [props.selectProps.classes.chipFocused]: props.isFocused,
//             })}
//             onDelete={props.removeProps.onClick}
//             deleteIcon={<CancelIcon {...props.removeProps} />}
//         />
//     );
// }

function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

const components = {
    Control,
    Menu,
    // MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};

class IntegrationReactSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            single: null,

            // multi: null,
        };
        // for handling function
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = name => value => {
        this.setState({
            [name]: value,
        });
    };
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        // this.setState(this.initialState);


    }
//     const onSubmit = async values => {
//     await sleep(300);
//     window.alert(JSON.stringify(values, 0, 2));
// };

    render() {
        const { classes, theme } = this.props;

        const selectStyles = {
            input: base => ({
                ...base,
                color: theme.palette.text.primary,
                '& input': {
                    font: 'inherit',
                },
            }),
        };

        return (
            <form className={classes.root} onSubmit={this.handleSubmit}>
                <NoSsr>
                    <Select
                        classes={classes}
                        styles={selectStyles}
                        options={suggestions}
                        components={components}
                        value={this.state.single}
                        onChange={this.handleChange('single')}
                        placeholder="Search a country (start with a)"
                        isClearable
                    />
                    <button type="submit"> click here</button>
                    {/*<div className={classes.divider} />*/}
                    {/*<Select*/}
                    {/*classes={classes}*/}
                    {/*styles={selectStyles}*/}
                    {/*textFieldProps={{*/}
                    {/*label: 'Label',*/}
                    {/*InputLabelProps: {*/}
                    {/*shrink: true,*/}
                    {/*},*/}
                    {/*}}*/}
                    {/*options={suggestions}*/}
                    {/*components={components}*/}
                    {/*value={this.state.multi}*/}
                    {/*onChange={this.handleChange('multi')}*/}
                    {/*placeholder="Select multiple countries"*/}
                    {/*isMulti*/}
                    {/*/>*/}
                </NoSsr>
            </form>
        );
    }
}

IntegrationReactSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect);
