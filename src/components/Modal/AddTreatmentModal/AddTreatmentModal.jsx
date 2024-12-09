import saveImg from 'assets/images/save.svg';
import Dropdown from 'components/Dropdowns/Dropdown/Dropdown';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authenticationService from 'services/AuthenticationService.jsx';
import petService from 'services/PetService.jsx';
import styles from './AddTreatmentModal.module.css';

const AddTreatmentModal = ({ petId, isOpen, onClose }) => {
	const navigate = useNavigate();
	const timeUnits = ['дн.', 'нед.', 'мес.', 'г.'];
	const unitToText = {
		DAYS: 'дн.',
		WEEKS: 'нд.',
		MONTHS: 'мес.',
		YEARS: 'г.',
	};
	const textToUnit = {
		'дн.': 'DAYS',
		'нд.': 'WEEKS',
		'мес.': 'MONTHS',
		'г.': 'YEARS',
	};

	const [frequencyNumber, setFrequencyNumber] = useState('');
	const [timeUnit, setTimeUnit] = useState(timeUnits[0]);
	const [medicationId, setMedicationId] = useState('');
	const [property, setProperty] = useState('');
	const [dateOfLastTreatment, setDateOfLastTreatment] = useState('');
	const [medications, setMedications] = useState([]);

	useEffect(() => {
		const today = new Date().toISOString().split('T')[0];
		setFrequencyNumber('');
		setTimeUnit(timeUnits[0]);
		setMedicationId(medications.length > 0 ? medications[0]?.id : '');
		setProperty('');
		setDateOfLastTreatment(today);
		setMedications([]);
	}, [isOpen]);

	useEffect(() => {
		if (medications.length > 0) {
			const firstMedication = medications[0];
			setMedicationId(firstMedication.id);
			setFrequencyNumber(
				firstMedication?.default_treatment_frequency?.num_period || ''
			);
			setTimeUnit(
				unitToText[
					firstMedication?.default_treatment_frequency?.period_type
				] || timeUnits[0]
			);
		}
	}, [medications]);

	const handleNumberChange = event => {
		const value = event.target.value;
		if (/^\d*$/.test(value)) {
			setFrequencyNumber(value);
		}
	};

	const handleMedicationChange = event => {
		const id = event.target.value;
		setMedicationId(id);
		const medication = medications.find(m => m.id.toString() === id);
		setFrequencyNumber(
			medication?.default_treatment_frequency?.num_period || ''
		);
		setTimeUnit(
			unitToText[medication?.default_treatment_frequency?.period_type] ||
				timeUnits[0]
		);
	};

	const handleTimeUnitChange = event => {
		setTimeUnit(event.target.value);
	};

	const handleClick = event => {
		event.preventDefault();
		const addTreatmentDto = {
			medication_id: medicationId,
			date_of_last_treatment: dateOfLastTreatment,
			treatment_frequency: {
				num_period: frequencyNumber,
				period_type: textToUnit[timeUnit],
			},
		};
		petService
			.addTreatmentToPet(petId, addTreatmentDto)
			.then(() => {
				window.location.reload();
			})
			.catch(error => {
				if (error.response.status === 401) {
					authenticationService
						.refreshToken()
						.then(response => {
							authenticationService.saveToken(
								response.data.access_token,
								response.data.refresh_token
							);
							petService
								.addTreatmentToPet(petId, addTreatmentDto)
								.then(() => window.location.reload())
								.catch(error => {
									if (error.response.status === 401) {
										authenticationService.deleteTokens();
										navigate('/login');
									} else {
										toast.error(
											error?.response?.data?.message
										);
									}
								});
						})
						.catch(error => {
							if (error.response.status === 401) {
								authenticationService.deleteTokens();
								navigate('/login');
							} else {
								toast.error(error?.response?.data?.message);
							}
						});
				} else {
					toast.error(error?.response?.data?.message);
				}
			});
	};

	return (
		<>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles.modal_wrapper}>
						<div className={styles.modal_content}>
							<div className={styles.modal_header}>
								<h2 className={styles.modal_title}>
									Добавление обработки
								</h2>
								<div
									className={styles.close}
									id='pop-up-close'
									onClick={() => onClose()}
								>
									✕
								</div>
							</div>
							<div className={styles['table-container']}>
								<table className={styles['resizable-table']}>
									<thead>
										<tr>
											<th>Тип обработки</th>
											<th>Препарат</th>
											<th>Дата последней обработки</th>
											<th>Частота обработок</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<Dropdown
													selected={property}
													setSelected={setProperty}
													setMedications={
														setMedications
													}
												/>
											</td>
											<td>
												<select
													className={styles.select}
													value={medicationId}
													onChange={
														handleMedicationChange
													}
												>
													{medications.map(
														medication => (
															<option
																key={
																	medication.id
																}
																value={
																	medication.id
																}
															>
																{
																	medication.name
																}
															</option>
														)
													)}
												</select>
											</td>
											<td>
												<input
													type='date'
													className={styles.input}
													value={dateOfLastTreatment}
													onChange={e =>
														setDateOfLastTreatment(
															e.target.value
														)
													}
												/>
											</td>
											<td
												className={
													styles.frequencyInputContainer
												}
											>
												<span
													className={
														styles.frequencyText
													}
												>
													1 раз в
												</span>
												<input
													type='text'
													className={
														styles.numberInput
													}
													value={frequencyNumber}
													onChange={
														handleNumberChange
													}
												/>
												<select
													className={
														styles.selectSmall
													}
													value={timeUnit}
													onChange={
														handleTimeUnitChange
													}
												>
													{timeUnits.map(
														(unit, index) => (
															<option
																key={index}
																value={unit}
															>
																{unit}
															</option>
														)
													)}
												</select>
											</td>
											<td>
												<button
													className={styles.save_icon}
													onClick={handleClick}
												>
													<img
														src={saveImg}
														alt='Save'
													/>
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AddTreatmentModal;
