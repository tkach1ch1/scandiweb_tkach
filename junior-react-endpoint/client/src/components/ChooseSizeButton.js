import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rememberSizeChoose } from '../redux/chooseAttributeReducer';
import LayoutRadioButton from '../reusable-components/LayoutRadioButton';
// import { rememberSizeChoose } from '../redux/chooseAttributeReducer';

const StyledChooseSizeButton = styled(LayoutRadioButton)`
  border: 1px solid black;
  &:hover {
    background-color: #eeeeee;
    transition: all 0.3s ease;
  }
`;

//NOTE:ATTRIBUTES CHOOSE BUTTONS
class ChooseSizeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedButton: this.props.firstValue,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick = async () => {
    await this.props.dispatch(rememberSizeChoose(this.props.value));
    // this.setState({ selectedButton: this.props.value });
  };

  render() {
    return (
      <div>
        <StyledChooseSizeButton
          {...this.props}
          onClick={this.onClick}
          onChange={(event) => event.target.value}
          checked={this.state.selectedButton === this.props.value}
          bgChecked='black'
          colorChecked='white'
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sizeBtn: state.chooseAttr.sizeBtn,
  total: state.quantity.total,
});

export default connect(mapStateToProps)(ChooseSizeButton);
