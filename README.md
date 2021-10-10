# PSA-Hackathon
PS7 - driver safety
<br>
# How to start?
## Installation

### Navigate into frontend folder

```bash
$ npm install
```

## Running the Frontend app

```bash
# development
$ npm run start
```

### Navigate into backend folder to start up DB
#### you should have 
#### 1. Pip installed
#### 2. pipenv
#### 3. Django

#### Navigate into first backend folder and run following command to install all necessary packages
```bash
$ pipenv shell
$ pipenv install
```

#### Start up DB (backend) -> Navigate into directory with manage.py file.

```bash
$ python manage.py runserver
```

### Navigate into Yolov4 file to start up object detection model that is linked to backend.
### setting up of yolov4 with TS weights
#### Conda should have been installed. I will not go through on how to install here.
```bash
$ cd yolov4-custom-functions
# CPU
$ conda env create -f conda-cpu.yml
$ conda activate yolov4-cpu
# GPU
$ conda env create -f conda-gpu.yml
$ conda activate yolov4-gpu
```
#### Weights have already been provided.

### Following command will start up your web camera and model will run. -> Navigate into yolov4-custom-functions
```bash
$ python detect_video.py --weights ./checkpoints/yolov4-416 --size 416 --model yolov4 --video 0 --output ./detections/results.avi
```

### Camera can then be connected via this model to be placed on prime for monitoring.

