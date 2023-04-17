const Attendance = require('../../models/attendance');
const Doctor = require('../../models/doctor');
const Patient = require('../../models/patient');

async function createAttendance(req, res) {
    try {
        const doctorInDb = await Doctor.findByPk(req.body.doctor_id);

        if (!doctorInDb) {
            return res.status(404).json({message: 'Médico não encontrado'})
        };

        const patientId = await Patient.findByPk(req.body.patient_id);

        if (!patientId) {
            return res.status(404).json({message: 'Paciente não encontrado'})
        };

        const data = {
            doctor_id: req.body.doctor_id,
            patient_id: req.body.patient_id
        };

        const attendance = await Attendance.create(data);
        
        doctorInDb.total_attendances += 1;
        patientId.total_attendances += 1;
        patientId.service_status = 'ATENDIDO';

        await doctorInDb.save();
        await patientId.save();

        res.status(200).json({atendimento: attendance, medico: doctorInDb, paciente: patientId});

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Não foi possível processar a solicitação"}) 
    }
};

module.exports = createAttendance;