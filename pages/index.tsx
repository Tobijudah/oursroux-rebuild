import Head from "next/head";
import { useState } from "react";
import { data } from './api/data';
import styled from "styled-components";
import Button from "../components/Button";
import Section from "../components/Section";
import ArrowCircle from "../components/ArrowCircle";

const Container = styled.div`
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: row-reverse;
	overflow: hidden;
`

export default function Home() {

	const [current, setCurrent] = useState<number>(0)

	return (
		<div>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, minimal-ui, shrink-to-fit=no"
				/>
				<title>Benjamin Guedj - French designer</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://www.oursroux.com/favicon.ico"
					rel="shortcut icon"
				/>
			</Head>
			
			<Button left>All projects</Button>
			<Button right>About</Button>
			<Container>
				<ArrowCircle Color={data[current].color}/>
				{data.map(data => 
					<Section key={data.id} Data={data}/>
				)}
			</Container>
		</div>
	);
}
