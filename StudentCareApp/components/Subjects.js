import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card, DataTable } from "react-native-paper";
import { courses, marks, subjects } from "../assets/StudentsDb";

export default function Subjects({ student }) {
  const course = courses.find((c) => c.id === student.course_id);

  const userMarks = marks.filter((m) => m.student_id === student.id);

  const userSubjects = subjects.filter((s) =>
    userMarks.map((m) => m.subject_id).includes(s.id),
  );

  const averageMarks = userMarks.reduce((acc, m) => acc + m.marks, 0) / userMarks.length;

  return (
    <View style={styles.view}>
      <Image source={require("../assets/logo.png")} style={styles.image} />

      <Card style={{ margin: 20 }}>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.h1}>{course.name}</Text>
          <Text style={{ textAlign: "center" }}>
            {marks.length} Subjects | Average Marks: {averageMarks.toFixed()}
          </Text>

          <View
            style={{
              marginBlock: 20,
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

          <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
            Marks Information
          </Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Subject</DataTable.Title>
              <DataTable.Title numeric>Marks</DataTable.Title>
            </DataTable.Header>

            {userSubjects.map((subject) => {
              return (
                <DataTable.Row key={subject.id}>
                  <DataTable.Cell>{subject.name}</DataTable.Cell>
                  <DataTable.Cell numeric>
                    {userMarks.find((m) => m.subject_id === subject.id).marks}
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  profile_pic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: "auto",
  },
});
