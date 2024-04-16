import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

const MyComponent = (props) => {
    // 각 카테고리의 체크박스 상태를 관리하기 위한 상태 변수들
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);

    // 체크박스가 토글될 때마다 호출되는 함수
    const toggleCheckbox = (value, category) => {
        if (category === 'country') {
            if (selectedCountries.includes(value)) {
                setSelectedCountries(selectedCountries.filter(item => item !== value));
            } else {
                setSelectedCountries([...selectedCountries, value]);
            }
        } else if (category === 'type') {
            if (selectedTypes.includes(value)) {
                setSelectedTypes(selectedTypes.filter(item => item !== value));
            } else {
                setSelectedTypes([...selectedTypes, value]);
            }
        }
    };

    // 각 카테고리의 체크박스를 생성하는 함수
    const createCheckboxes = (items, category) => {
        return items.map((item, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => toggleCheckbox(item, category)}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                }}
            >
                <View
                    style={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: selectedCountries.includes(item) || selectedTypes.includes(item) ? "#6750A4" : "#303233",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 8,
                    }}
                >
                    {selectedCountries.includes(item) || selectedTypes.includes(item) ? (
                        <View
                            style={{
                                width: 12,
                                height: 12,
                                backgroundColor: "#6750A4",
                                borderRadius: 6,
                            }}
                        />
                    ) : null}
                </View>
                <Text style={{ color: "#303233", fontSize: 14 }}>{item}</Text>
            </TouchableOpacity>
        ));
    };

    // 각 카테고리의 체크박스 항목
    const countries = ["한식", "양식", "중식", "일식"];
    const types = ["면류", "빵류", "밥류", "죽/스프류"];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View style={{ padding: 12 }}>
                <View style={{ height: 70, justifyContent: "center", backgroundColor: "#6750A4", padding: 12 }}>
                    <Text style={{ color: "#FFFFFF", fontSize: 20 }}>muk</Text>
                </View>
                <View style={{ height: 170, justifyContent: "center", backgroundColor: "#FFFFFF", padding: 12 }}>
                    <Text style={{ color: "#303233", fontSize: 20, textAlign: "center" }}>
                        먹지니를 시작 하기 전에,
                        {"\n"}
                        빠른 결과 도출을 위해 설정해 주세요!
                    </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 12 }}>
                    <View style={{ height: 70, backgroundColor: "#FFFFFF", padding: 12 }}>
                        <Text style={{ color: "#303233", fontSize: 14 }}>국가 분류</Text>
                        {createCheckboxes(countries, 'country')}
                    </View>
                    <View style={{ height: 70, backgroundColor: "#FFFFFF", padding: 12 }}>
                        <Text style={{ color: "#303233", fontSize: 14 }}>음식 종류</Text>
                        {createCheckboxes(types, 'type')}
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "#FFFFFF", padding: 12 }}>
                    <TouchableOpacity style={{ width: 150, height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#6750A4", borderRadius: 90, padding: 12 }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 14 }}>뭐든 좋아요!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 150, height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#6750A4", borderRadius: 90, padding: 12 }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 14 }}>초기화</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 70, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF", padding: 12 }}>
                    <TouchableOpacity style={{ width: 200, height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#6750A4", borderRadius: 90, padding: 12 }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 14 }}>먹지니 시작하기!</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 40, backgroundColor: "#6750A4", padding: 12 }}></View>
            </View>
        </SafeAreaView>
    );
};

export default MyComponent;
