import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	padding: 24px;

	.vertical-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.row {
		display: flex;
		width: 100%;
	}

	.calendar {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		text-align: center;
	}

	.calendar header {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: default;
		display: block;
		font-weight: bold;
		user-select: none;

		padding-bottom: 16px;
	}

	.calendar header .month-display {
		align-items: center;
		height: 100%;
	}
	
	.calendar header .month-label {
		font-family: ${({ theme }) => theme.typography.font2};
		font-weight: ${({ theme }) => theme.typography.weights[2]};
		font-size: ${({ theme }) => theme.typography.sizes[3]};
		flex: 1;
	}
	
	.calendar header .arrow {
		text-align: center;
		flex-basis: 15%;
		font-weight: bold;
		cursor: pointer;
		transition: background .2s;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.calendar header .arrow:hover {
		background: #1f5c9d;
	}

	.calendar .week {
		height: 100%;
	}

	.calendar .week:first-child {
	}

	.calendar .day-names {
		font-weight: bold;
		cursor: default;
		font-size: 1.2rem;
	}

	.calendar .day-names .day {
		font-family: ${({ theme }) => theme.typography.font1};
		font-weight: ${({ theme }) => theme.typography.weights[2]};
		font-size: ${({ theme }) => theme.typography.sizes[1]};
		cursor: default;
	}

	.calendar .day-names .day:hover {
		background: inherit;
	}

	.calendar .day {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		height: 100%;
		cursor: pointer;
		transition: all .2s;

		border: 1px solid transparent;
		border-radius: 4px;

		font-family: ${({ theme }) => theme.typography.font2};
		font-weight: ${({ theme }) => theme.typography.weights[1]};
		font-size: ${({ theme }) => theme.typography.sizes[2]};
	}

	.calendar .day:hover {
		border-color: ${({ theme }) => theme.colors.primary};
		background: ${({ theme }) => theme.colors.col4};
	}

	.calendar .day.today {
		border: 1px solid ${({ theme }) => theme.colors.primary};
	}

	.calendar .day.different-month {
		color: #C0C0C0;
	}

	.calendar .day.selected {
		background: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.col3};
	}
`