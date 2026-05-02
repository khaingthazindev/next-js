'use client';

import {useState} from "react";
import {data} from '@/app/components/product/data';
import '@/app/components/product/product.css'
import classNames from "classnames";

function SearchBar({onFilterChange}) {
		const [filter, setFilter] = useState('');
		const [isInStock, setIsInStock] = useState(false);
		
		const onfilterChangeHandler = (filterP, isInStockP) => {
				onFilterChange({
						filter: filterP,
						isInStock: isInStockP
				})
		}
		const filterChange = (e) => {
				setFilter(e.target.value);
				onfilterChangeHandler(e.target.value, isInStock);
		}
		const isInStockChange = (e) => {
				setIsInStock(e.target.checked);
				onfilterChangeHandler(filter, e.target.checked);
		}
		return (<div>
				<form>
						<input type="text" value={ filter } onChange={filterChange} /><br />
						<input type="checkbox" id='in-stock' checked={ isInStock } onChange={isInStockChange} />
						&nbsp;<label htmlFor="in-stock">Only Show Products in Stock</label>
				</form>
		</div>);
}

function ProductTable({group}) {
		// let categories = products.map(product => product.category);
		// categories = [...new Set(categories)];
		let categories = Object.keys(group);
		
		return (<div>
			<h3>Name     Price</h3>
				{
						categories.map((category, index) => <ProductCategoryRow key={index} products={group[category]} title={category} />)
						// categories.map((category, index) => {
						// 		let categoryProducts = products.filter(product => product.category === category);
						// 		return <ProductCategoryRow key={index} products={categoryProducts} title={category} />
						// })
				}
		</div>);
}

function ProductCategoryRow({products, title}) {
		return (<div>
				<h4>{title}</h4>
				{
						products.map((product, index) => <ProductRow key={index} product={product} />)
				}
		</div>);
}

function ProductRow({product}) {
		const productClass = classNames({
				'product-name': true,
				'product-not-in-stock': !product.stocked
		});
		return (<div>
				<span className={productClass}>{product.name}</span>
				<span className={'product-price'}>{product.price}</span>
		</div>)
}

function applyFilter(data, filterParams) {
		let newData = [...data];
		if (filterParams.filter) {
				newData = newData.filter(product => product.name.includes(filterParams.filter));
		}
		if (filterParams.isInStock) {
				newData = newData.filter(product => product.stocked);
		}
		return newData;
}

function groupByCategory(products) {
		let group = {};
		for (let product of products) {
				if (group[product.category]) {
						group[product.category].push(product);
				} else {
						group[product.category] = [product];
				}
		}
		return group;
}

export default function FilterableProductTable() {
		const [products, setProducts] = useState(data);
		const onFilterChange = (filterParams) => {
				
				setProducts([...applyFilter(data, filterParams)]);
		}
		let group = groupByCategory(products);
		return (<div>
				FilterableProductTable
				<SearchBar onFilterChange={onFilterChange} />
				<ProductTable group={group} />
		</div>);
}