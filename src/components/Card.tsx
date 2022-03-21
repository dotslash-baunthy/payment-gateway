import React, { Component, ChangeEvent } from "react";

type State = {
    cardNumber: number,
    nameOnCard: string,
    expiry: {
        month: number,
        year: number
    },
    cvvNumber: number,
    showConfirmation: boolean
};

class Card extends Component<{}, State> {
    state = {
        cardNumber: 0,
        nameOnCard: "",
        expiry: {
            month: 0,
            year: 0
        },
        cvvNumber: 0,
        showConfirmation: true
    };

    payHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        } as unknown as State);
    }

    render() {
        return (
            <>
                <form>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="cnum">Card number</label>:
                                <br />
                                (12 digits, without dashes)
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="cnum"
                                    name="cardNumber"
                                    min="000000000000"
                                    max="999999999999"
                                    placeholder="xxxx-xxxx-xxxx"
                                    value={this.state.cardNumber}
                                    onChange={this.payHandler}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">Card holder name</label>:
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="name"
                                    name="nameOnCard"
                                    placeholder="Enter your name"
                                    value={this.state.nameOnCard}
                                    onChange={this.payHandler}
                                />
                            </td>
                        </tr>
                    </table>
                </form>
            </>
        )
    }
}

export default Card;