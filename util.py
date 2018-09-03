
import os, subprocess

app_path = os.path.dirname(os.path.abspath(__file__))
data_loc = 'database/'
result_loc = 'result/'

def get_file_extension(filename = ''):
	'''
	'''
	return filename.split('.')[-1]

def py_file_code_convention_analysis(filename = 'test.py'):
	'''
	this function analyzes python codes
	'''
	input_file = data_loc + filename
	# run analysis
	log_path = result_loc + 'python_analysis.log'
	err_log_path = result_loc + 'python_analysis_err.log'
	command = ['pylint', input_file]
	with open(log_path, 'wb') as process_out, open(log_path, 'rb', 1) as reader, open(err_log_path, 'wb') as err_out:
		process = subprocess.Popen(
			command, stdout=process_out, stderr=err_out, cwd=app_path)
	# wait until the process finishes
	process.wait()
	return 'Program analysis is done'
