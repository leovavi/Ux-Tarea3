class ProductList extends React.Component {
  render() {
  	const product = Seed.products[0];
    return (
      <div className='ui unstackable items'>
        <Product
        	id={product.id}
        	title={product.title}
        	description={product.description}
        	url={product.url}
        	votes={product.votes}
        	submittedAvatarUrl={product.submittedAvatarUrl}
        	productImageUrl={product.productImageUrl}
        />
      </div>
    );
  }
}

class Product extends React.Component{
	render(){
		return (
			<div className='item'>
				<div className='image'>
					<img src={this.props.productImageUrl} />
				</div>
				<div className='middle aligned content'>
					<div className='header'>
						<a><i className='large caret up icon' /></a>
						{this.props.title}
					</div>
					<div className='description'>
						<a href={this.props.url}>
							{this.props.title}
						</a>
						<p>
							{this.props.description}
						</p>
					</div>
					<div className='extra'>
						<span>Submitted by:</span>
						<img className='ui avatar image' src={this.props.submittedAvatarUrl} />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);

