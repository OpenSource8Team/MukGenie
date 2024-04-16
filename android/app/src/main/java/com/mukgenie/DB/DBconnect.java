package com.mukgenie.DB;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * 데이터베이스와의 연결을 담당하는 클래스입니다.
 */
public class DBconnect {
    // 데이터베이스 연결 정보
    public static final String databaseDriver = "com.mysql.cj.jdbc.Driver";
    public static final String databaseUrl = "jdbc:mysql://localhost/hospital?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF8";
    public static final String databaseUser = "root";
    public static final String databasePassword = "1234";
    public static Connection connection = null;

    /**
     * 테스트를 위한 main 메서드입니다.
     * 연결 및 종료 테스트를 수행합니다.
     */
    public static void main(String[] args) {
        // Connection TEST
        connect();
        // Close TEST
        close();
    }

    /**
     * 데이터베이스에 연결합니다.
     *
     * @return 연결된 Connection 객체
     */
    public static Connection connect() {
        try {
            Class.forName(databaseDriver);
            connection = DriverManager.getConnection(databaseUrl, databaseUser, databasePassword);
            if (connection != null) {
                System.out.println("Connection Succeed");
            } else {
                System.out.println("Connection Failed");
            }
        } catch (Exception e) {
            // DB 연결 에러가 나는 경우 JDBC 드라이버(mysql-connector) 경로를 Java Build Path에 등록했는지 확인하기
            System.out.println("데이터 베이스 연결 안됨");
            System.err.println("Connection Error! : " + e.getMessage());
            e.printStackTrace();
        }
        return connection;
    }

    /**
     * 데이터베이스 연결을 종료합니다.
     */
    public static void close() {
        try {
            if (connection != null) {
                System.out.println("Connection Close");
                connection.close();
            }
        } catch (SQLException e) {
            System.err.println("Connection Closing Failed! : " + e.getMessage());
            e.printStackTrace();
        }
    }
}
