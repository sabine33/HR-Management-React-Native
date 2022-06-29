// ./navigation/StackNavigator.js

import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import LoadingScreen from "./pages/LoadingScreen";

import {
  HelloUserPage,
  FingerPrintLoginPage,
  LoadingUI,
  VerificationPage,
  NoNetworkPage,
} from "./components/pages/auth/index";

import {
  CompanyPage,
  DocumentsPage,
  NewReportUI,
  NewsPage,
  ReportsPage,
  SettingsPage,
  SingleThanks,
  StaffPage,
  StaffPersonalInformationPage,
  StaffsListPage,
  ThanksPage,
} from "./components/pages/drawer";

import {
  ChatComponent,
  PlannerComponent,
  FiltersPage,
  NewRequestPage,
  NewEventPage,
  ChooseAReasonPage,
} from "./components/pages/home";

import {
  ProfilePage,
  MyInformationPage,
  PersonalInformationPage,
  ContactInformationPage,
  BankDetailsPage,
  EmergencyContactPage,
  LogBookPage,
  OneTwoOne,
  AppraisalPage,
  AppraisalForm,
  BenefitPage,
  CPDAdd,
  CPDForm,
  CPDUploadFile,
  DrivingLicensePage,
  DrivingLicenseFiles,
  ObjectivesPage,
  ObjectivesForm,
  QualificationPage,
  QualificationForm,
  TrainingsPage,
  VehicleForm,
  UploadFilePage,
  MyEmergencyContactPage,
  MyBankDetailPage,
} from "./components/pages/profile";

import Icon from "react-native-vector-icons/FontAwesome";

import {
  ThanksBadgePage,
  LanguagePage,
  NotificationsPage,
  WhatsNewPage,
} from "./components/pages/extras";
import { TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./Home";
import EditWidgetsPage from "./components/pages/home/EditWidgetsPage";
import NewChatPage from "./components/pages/home/NewChatPage";
import { AllStaffsPage } from "./components/pages/drawer/AllStaffsPage";
import { ChoosePersonPage } from "./components/pages/extras/ChoosePersonPage";
import { ThanksBadgeSummaryPage } from "./components/pages/extras/ThanksBadgeSummaryPage";
import { ThanksBadgeSuccessPage } from "./components/pages/extras/ThanksBadgeSuccessPage";
import { SingleNewsPage } from "./components/pages/drawer/SingleNewsPage";
import { NewGroupChatPage } from "./components/pages/home/NewGroupChatPage";

import { ChatPage } from "./components/pages/home/ChatPage";
import { colors } from "./components/pages/generic/GlobalStyles";
import ApprovalsPage from "./components/pages/home/ApprovalsPage";
import AuthorizationPage from "./components/pages/home/AuthorizationPage";
import AuthorizationUI from "./components/pages/home/AuthorizationUI";
import AuthorizationRequests from "./components/pages/home/AuthorizationRequests";
import { RequestSuccessPage } from "./components/pages/home/RequestSuccessPage";

import { PickerPage } from "./components/pages/profile/PickerPage";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const horizontalAnimation = {
  headerStyle: {
    backgroundColor: "#334873",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {},
  gestureDirection: "horizontal",
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={horizontalAnimation}
      headerMode="float"
      initialRouteName="LoadingUI"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: colors.primaryColor },
      }}
    >
      <Stack.Screen
        name="NoNetworkPage"
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        component={NoNetworkPage}
      />
      <Stack.Screen
        name="HelloUserPage"
        component={HelloUserPage}
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="LoadingUI"
        component={LoadingUI}
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="VerificationPage"
        component={VerificationPage}
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="FingerPrintLoginPage"
        component={FingerPrintLoginPage}
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="ThanksBadge" component={ThanksBadgePage} />
      <Stack.Screen
        name="ThanksBadgeSuccessPage"
        component={ThanksBadgeSuccessPage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="ChoosePersonPage" component={ChoosePersonPage} />
      <Stack.Screen
        name="ThanksBadgeSummaryPage"
        component={ThanksBadgeSummaryPage}
      />

      <Stack.Screen
        name="NotificationsSettings"
        component={NotificationsPage}
      />
      <Stack.Screen name="Language" component={LanguagePage} />
      <Stack.Screen name="WhatsNew" component={WhatsNewPage} />
      <Stack.Screen
        name="NewChatPage"
        component={NewChatPage}
        options={{
          headerTitle: "New Chat",
        }}
      />
      <Stack.Screen name="Chat" component={ChatComponent} />
      <Stack.Screen name="ChatPage" component={ChatPage} />

      <Stack.Screen
        name="NewGroupChatPage"
        component={NewGroupChatPage}
        options={{
          headerTitle: "New Group Chat",
        }}
      />

      <Stack.Screen
        name="Planner"
        component={PlannerComponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PlannerFilters"
        component={FiltersPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewHolidayRequestPage"
        component={NewRequestPage}
        options={{
          headerShown: true,
          headerTitle: "New Holiday Request",
        }}
      />
      <Stack.Screen
        name="RequestSuccessPage"
        component={RequestSuccessPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewEventRequestPage"
        component={NewEventPage}
        options={{
          headerShown: true,
          headerTitle: "New Event Request",
        }}
      />
      <Stack.Screen name="ChooseAReason" component={ChooseAReasonPage} />
      <Stack.Screen
        name="EditWidgetsPage"
        component={EditWidgetsPage}
        options={{
          headerShown: true,
          headerTitle: "Edit Widgets",
        }}
      />
      <Stack.Screen
        name="Company"
        component={CompanyPage}
        options={{
          headerTitle: "Company Profile",
          headerBackTitleVisible: true,
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen name="StaffList" component={StaffsListPage} />
      <Stack.Screen name="AllStaffs" component={AllStaffsPage} />
      <Stack.Screen name="StaffPage" component={StaffPage} />
      <Stack.Screen
        name="StaffPersonalInformationPage"
        component={StaffPersonalInformationPage}
      />
      <Stack.Screen
        name="DocumentsPage"
        component={DocumentsPage}
        options={{
          headerTitle: "Documents",
        }}
      />
      <Stack.Screen
        name="PickerPage"
        component={PickerPage}
        options={{
          headerTitle: "Picker",
        }}
      />
      <Stack.Screen
        name="ExpenseReport"
        component={ReportsPage}
        options={{
          headerShown: true,
          headerTitle: "Expenses",
        }}
      />
      <Stack.Screen
        name="NewReportUI"
        component={NewReportUI}
        options={{
          title: "Add Expenses",
        }}
      />
      <Stack.Screen name="NewsPage" component={NewsPage} />
      <Stack.Screen
        name="ThanksPage"
        component={ThanksPage}
        options={{
          headerTitle: "Thanks",
        }}
      />

      <Stack.Screen name="SingleThanks" component={SingleThanks} />
      <Stack.Screen name="SingleNews" component={SingleNewsPage} />

      <Stack.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          headerBackTitleVisible: true,
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: "Settings",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InformationPage"
        component={MyInformationPage}
        options={{
          title: "My Information",
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
        }}
      />
      <Stack.Screen
        name="PersonalInformationPage"
        options={{
          title: "Personal Information",
        }}
        component={PersonalInformationPage}
      />
      <Stack.Screen
        name="ContactInformationPage"
        options={{
          title: "Contact Information",
        }}
        component={ContactInformationPage}
      />
      <Stack.Screen
        name="BankDetailsPage"
        component={MyBankDetailPage}
        options={{
          title: "Bank Details",
        }}
      />
      <Stack.Screen
        name="EmergencyContactPage"
        component={EmergencyContactPage}
        options={{
          title: "Emergency Contact",
        }}
      />
      <Stack.Screen
        name="EmergencyContactForm"
        component={MyEmergencyContactPage}
        options={{
          title: "Emergency Contact",
        }}
      />
      <Stack.Screen name="LogbookPage" component={LogBookPage} />
      <Stack.Screen name="OneTwoOnePage" component={OneTwoOne} />
      <Stack.Screen
        name="AppraisalPage"
        component={AppraisalPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AppraisalForm"
        component={AppraisalForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="BenefitPage" component={BenefitPage} />
      <Stack.Screen name="CPDPage" component={CPDAdd} />
      <Stack.Screen name="CPDForm" component={CPDForm} />
      <Stack.Screen name="CPDUploadFile" component={CPDUploadFile} />
      <Stack.Screen
        name="DrivingLicensePage"
        component={DrivingLicensePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DrivingLicenseFiles"
        component={DrivingLicenseFiles}
      />
      <Stack.Screen name="ObjectivesPage" component={ObjectivesPage} />
      <Stack.Screen name="ObjectivesForm" component={ObjectivesForm} />
      <Stack.Screen name="QualificationPage" component={QualificationPage} />
      <Stack.Screen name="QualificationForm" component={QualificationForm} />
      <Stack.Screen name="TrainingsPage" component={TrainingsPage} />
      <Stack.Screen name="VehicleForm" component={VehicleForm} />
      <Stack.Screen name="UploadFilePage" component={UploadFilePage} />

      <Stack.Screen
        name="ApprovalsPage"
        component={ApprovalsPage}
        options={{
          headerShown: true,
          headerTitle: "Approvals",
        }}
      />
      <Stack.Screen
        name="AuthorizationUI"
        component={AuthorizationUI}
        options={{
          headerShown: true,
          headerTitle: "Authorization Detail",
        }}
      />
      <Stack.Screen
        name="AuthorizationRequests"
        component={AuthorizationRequests}
        options={{
          headerShown: true,
          headerTitle: "Authorization Requests",
        }}
      />

      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        navigation={navigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
