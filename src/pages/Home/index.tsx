import {useContext, useState} from 'react';
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Tasklist from '../../components/TaskList';
import { TasksContext } from '../../context/TasksContext';

interface Task {
  id: string;
  title: string;
}

export default function Home() {
  const [newTask, setNewTask] = useState('');
  // const [tasks, setTasks] = useState<Task[]>([]);
  const tasks = useContext(TasksContext);

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Empty Task',
    } as Task;

    // setTasks([...tasks, data]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>

        <TextInput
          onChangeText={setNewTask}
          placeholderTextColor="#555"
          placeholder="Informe"
          style={styles.input}
        />

        <TouchableOpacity
          onPress={handleAddNewTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas tarefas</Text>

        <Tasklist />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#e9292b',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
