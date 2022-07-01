import React, { Component } from 'react';
import styled from 'styled-components';
import LayoutRadioButton from '../reusable-components/LayoutRadioButton';
import { connect } from 'react-redux';
import { rememberColorChoose } from '../redux/chooseAttributeReducer';

const StyledChooseColorButton = styled(LayoutRadioButton)`
  background: ${({ background }) => background};
  width: 32px;
  height: 32px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  position: relative;
  top: 2px;
  border: none;
`;

const ColorButtonWrapper = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 1px solid green;
  }
`;

//NOTE: CHOOSE COLOR BUTTONS

class ChooseColorButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: this.props.firstValue,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick = async () => {
    await this.props.dispatch(rememberColorChoose(this.props.value));
    // this.setState({ selectedColor: this.props.value });
  };

  render() {
    return (
      <div>
        <ColorButtonWrapper>
          <StyledChooseColorButton
            {...this.props}
            onChange={(event) =>
              this.setState({ selectedColor: event.target.value })
            }
            onClick={this.onClick}
            checked={this.state.selectedColor === this.props.value}
            borderChecked='1px solid green'
          />
        </ColorButtonWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  colorBtn: state.chooseAttr.colorBtn,
});

export default connect(mapStateToProps)(ChooseColorButton);
