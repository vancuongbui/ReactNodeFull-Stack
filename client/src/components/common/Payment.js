import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handlePaymentAction } from '../../store/actions';

class Payment extends Component {
  render() {
    // debugger;
    return (
      <StripeCheckout
        name="Organization: Vndemy"
        description="What the payment for"
        amount={500}    //cent in US dollar, 500 mean 5$
        token={token => this.props.onPaymentProcess(token)}    //come from action creator
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

// map function
const mapDispatchToProps = dispatch => {
    return {
        onPaymentProcess: (token) => dispatch(handlePaymentAction(token)),
    }
}

export default connect(null, mapDispatchToProps)(Payment);
/**
 * card: {id: "card_1DDXcIHt7gqo0M1xz5fk6ueH", object: "card", address_city: null, address_country: null, address_line1: null, …}
client_ip: "203.220.162.61"
created: 1537709238
email: "abcddfjdkjsdlfkjsla@gmail.com"
id: "tok_1DDXcIHt7gqo0M1xr79vnKpW"
livemode: false
object: "token"
type: "card"
used: false
 */
