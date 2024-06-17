pipeline {
    agent {
        label 'agent_node'
    }
    
    environment {
        SONARQUBE_SERVER = 'Sonar server'
        DOCKER_HUB_PAT = credentials('docker_login')
        
    }

    stages {
        stage('clone') {
            steps {
                git 'https://github.com/Manianise/spiritsPresentation'
            }
        }
        stage('install') {
            steps {
                sh '''
                    npm install
                    npm run build
                '''
            }
        }
        stage('Testing') {
            steps {
                sh 'npm run test'                
            }

        }
        stage('scan') {
            steps {
                withSonarQubeEnv(SONARQUBE_SERVER) {
                    sh '''
                    sonar-scanner \
                    -Dsonar.projectKey=spirits \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://172.216.0.5:9000 \
                    -Dsonar.token=sqp_e939619ecab2312b1386b714fb91953c4059c045
                    '''
                }
            }
        }
        stage("Quality Gate") {
            steps {
              timeout(time: 1, unit: 'HOURS') {
                waitForQualityGate abortPipeline: true
              }
            }
        }    
        stage('delivery') {
            steps {
                sh '''
                    docker login -u mechameleon -p ${DOCKER_HUB_PAT}
                    docker build  . -t mechameleon/spirits:${BUILD_ID} -t mechameleon/spirits:latest
                    docker push mechameleon/spirits:${BUILD_ID} && docker push mechameleon/spirits:latest
                '''
            }
        }

    }
    post {
        always {
            echo 'This always runs'
            // Actions that always run go here, e.g., cleaning up, sending notifications
        }
        success {
            echo 'This runs only if the pipeline succeeds'
            // Actions that run on success go here, e.g., notifying success
        }
        failure {
            echo 'This runs only if the pipeline fails'
            // Actions that run on failure go here, e.g., notifying failure
        }
        unstable {
            echo 'This runs only if the pipeline is unstable'
            // Actions that run if the build is unstable go here
        }
        cleanup {
            echo 'This runs after all the other post conditions'
            // Final cleanup actions go here
        }
    } 
}

