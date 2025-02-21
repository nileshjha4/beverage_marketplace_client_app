import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

const FinancialInformation = ({ financial }) => {
  const financeData = financial.finance;
  const years = [...new Set(financeData.map((item) => item.year))];
  const expenses = ['tuition', 'housing', 'meals', 'living_expense'];
  const screenWidth = Dimensions.get('window').width;

  // Fixed column widths
  const EXPENSE_COLUMN_WIDTH = 150;
  const YEAR_COLUMN_WIDTH = 130;
  const TOTAL_COLUMN_WIDTH = 150;
  
  // Calculate total table width
  const totalTableWidth = EXPENSE_COLUMN_WIDTH + (years.length * YEAR_COLUMN_WIDTH) + TOTAL_COLUMN_WIDTH;

  const calculateTotal = (expenseType) => {
    return financeData.reduce(
      (acc, item) => acc + parseFloat(item[expenseType].replace(/[^0-9.-]+/g, '')),
      0
    );
  };

  const TableCell = ({ children, width, isHeader, alignment = 'left' }) => (
    <View style={{
      width,
      padding: 16,
      backgroundColor: isHeader ? '#f3f4f6' : 'transparent',
      justifyContent: 'center',
    }}>
      <Text style={{
        textAlign: alignment,
        fontWeight: isHeader ? '600' : '400',
        color: '#374151',
        fontSize: 14,
      }}>
        {children}
      </Text>
    </View>
  );

  const renderTableHeader = () => (
    <View style={{ 
      flexDirection: 'row',
      backgroundColor: '#f3f4f6',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    }}>
      <TableCell width={EXPENSE_COLUMN_WIDTH} isHeader>Expense</TableCell>
      {years.map((year) => (
        <TableCell 
          key={year} 
          width={YEAR_COLUMN_WIDTH} 
          isHeader 
          alignment="right"
        >
          {year.toUpperCase()}
        </TableCell>
      ))}
      <TableCell width={TOTAL_COLUMN_WIDTH} isHeader alignment="right">Total</TableCell>
    </View>
  );

  const renderTableRow = (expense, index) => (
    <View 
      key={expense} 
      style={{ 
        flexDirection: 'row',
        backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
      }}
    >
      <TableCell width={EXPENSE_COLUMN_WIDTH}>
        {expense.replace('_', ' ')}
      </TableCell>
      {years.map((year) => {
        const yearData = financeData.find((item) => item.year === year);
        return (
          <TableCell
            key={year} 
            width={YEAR_COLUMN_WIDTH}
            alignment="right"
          >
            {yearData ? yearData[expense] : '-'}
          </TableCell>
        );
      })}
      <TableCell 
        width={TOTAL_COLUMN_WIDTH}
        alignment="right"
      >
        RM{calculateTotal(expense).toLocaleString()}
      </TableCell>
    </View>
  );

  const MetricCard = ({ title, value }) => (
    <View style={{ 
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 12,
      marginRight: 16,
      width: 150,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    }}>
      <Text style={{ fontSize: 14, fontWeight: '700', color: '#6b7280', marginBottom: 8 }}>{title}</Text>
      <Text style={{ fontSize: 12, color: '#374151' }}>{value}</Text>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <View style={{ padding: 16 }}>
        {/* Header Section */}
        <View style={{ alignItems: 'center', marginBottom: 32 }}>
          <Text style={{ fontSize: 28, fontWeight: '700', marginBottom: 8, color: '#111827' }}>
            Financial Forecast
          </Text>
          <Text style={{ fontSize: 16, color: '#6b7280' }}>
            {financial?.university}, {financial?.course_title}
          </Text>
        </View>

        {/* Costs Table Section */}
        <View style={{ 
          backgroundColor: 'white',
          borderRadius: 12,
          marginBottom: 32,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}>
          <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#e5e7eb' }}>
            <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 4, color: '#111827' }}>
              Cost Breakdown by Year
            </Text>
            <Text style={{ fontSize: 14, color: '#6b7280' }}>
              Detailed breakdown of expenses across your academic years
            </Text>
          </View>
          
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={true}
          >
            <View style={{ width: totalTableWidth }}>
              {renderTableHeader()}
              {expenses.map((expense, index) => renderTableRow(expense, index))}
            </View>
          </ScrollView>
        </View>

        {/* ROI Analysis Section */}
        <View style={{ 
          backgroundColor: 'white',
          borderRadius: 12,
          padding: 20,
          marginBottom: 32,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}>
          <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 4, color: '#111827' }}>
            Return on Investment Analysis
          </Text>
          <Text style={{ fontSize: 14, color: '#6b7280', marginBottom: 20 }}>
            Understanding your investment and potential returns
          </Text>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{ paddingBottom: 8 }}
          >
            <View style={{ flexDirection: 'row' }}>
              <MetricCard title="Total Cost of Education" value={financial?.total_cost_of_education} />
              <MetricCard title="Estimated Scholarships" value={financial?.estimated_scholarship_available} />
              <MetricCard title="Estimated Net Cost" value={financial?.estimated_net_cost} />
              <MetricCard title="Average Starting Salary" value={financial?.average_starting_salary} />
              <MetricCard title="Break-Even Point" value={financial?.break_even_point} />
            </View>
          </ScrollView>

          <Text style={{ marginTop: 20, fontSize: 14, color: '#6b7280', lineHeight: 20 }}>
            Based on the average starting salary, you can expect to recover your investment within approximately{' '}
            <Text style={{ fontWeight: '600', color: '#374151' }}>{financial?.break_even_point}</Text> years after graduation.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FinancialInformation;