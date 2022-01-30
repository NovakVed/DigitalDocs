package com.example.simulator;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.coordinatorlayout.widget.CoordinatorLayout;

import android.content.Intent;
import android.icu.text.NumberFormat;
import android.icu.util.ULocale;
import android.os.Build;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.Button;

import com.google.android.material.textfield.TextInputEditText;
import com.google.gson.Gson;

import java.sql.Timestamp;

public class MainActivity extends AppCompatActivity {

    Button sendDataToDigitalDocApp;
    AutoCompleteTextView autoCompleteTextView;

    TextInputEditText inputBillTotal;
    TextInputEditText inputSellerID;
    TextInputEditText inputStoreID;
    TextInputEditText inputBillID;

    String cleanString = "";

    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR1)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sendDataToDigitalDocApp = (Button) findViewById(R.id.sendDataToDigitalDocApp);
        autoCompleteTextView = (AutoCompleteTextView) findViewById(R.id.autoCompleteText);
        inputBillTotal = (TextInputEditText) findViewById(R.id.inputBillTotal);
        inputSellerID = (TextInputEditText) findViewById(R.id.inputSellerID);
        inputStoreID = (TextInputEditText) findViewById(R.id.inputStoreID);
        inputBillID = (TextInputEditText) findViewById(R.id.inputBillID);

        Timestamp timestamp = new Timestamp(System.currentTimeMillis());

        inputSellerID.setText("1");
        inputStoreID.setText("1");
        inputBillID.setText(String.valueOf(timestamp.getTime()));

        // Price change listener
        inputBillTotal.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int before, int count) {

            }

            private String current = "";

            @RequiresApi(api = Build.VERSION_CODES.N)
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                if (!s.toString().equals("")) {
                    if (!s.toString().equals(current)) {
                        inputBillTotal.removeTextChangedListener(this);

                        // Strip off the currency symbol
                        String replaceable = String.format("[%s,.\\s]", NumberFormat.getCurrencyInstance(ULocale.US).getCurrency().getSymbol());
                        cleanString = s.toString().replaceAll(replaceable, "");

                        double parsed = Double.parseDouble(cleanString);
                        String formatted = NumberFormat.getCurrencyInstance(ULocale.US).format((parsed / 100)).replace("$", "");

                        current = formatted;
                        inputBillTotal.setText(formatted);

                        // Set cursors and selections to the exact spot right before ' HRK'
                        inputBillTotal.setSelection(formatted.length());

                        inputBillTotal.addTextChangedListener(this);
                    }
                }
            }

            @Override
            public void afterTextChanged(Editable editable) {

            }
        });

        String[] option = {"Gotovinsko", "Kartično", "Internetsko", "Rate"};
        ArrayAdapter arrayAdapter = new ArrayAdapter(this, R.layout.list_item, option);

        // To make default
        autoCompleteTextView.setText(arrayAdapter.getItem(0).toString(), false);
        autoCompleteTextView.setAdapter(arrayAdapter);
    }

    // Send data to DigitalDoc app
    public void sendDataToDigitalDocApp(View view) {
        Gson gson = new Gson();

        String sellerID = inputSellerID.getText().toString();
        String storeID = inputStoreID.getText().toString();
        String billID = inputBillID.getText().toString();

        // String billTotal = inputBillTotal.getText().toString();
        String methodOfPayment = autoCompleteTextView.getText().toString();

        if (!cleanString.equals("")) {
            double parsedBillTotal = Double.parseDouble(cleanString) / 100;
            int parsedSellerID = Integer.parseInt(sellerID);
            int parsedStoreID = Integer.parseInt(storeID);

            LastTransaction lastTransaction = new LastTransaction(billID, parsedBillTotal, parsedSellerID, parsedStoreID, methodOfPayment, "234212xxxxxx4234", "2232ab342ce2342", "Vukovarska 34, 10000 Zagreb");
            String json = gson.toJson(lastTransaction);

            Intent intent = new Intent("com.example.digital_docs.action");
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.putExtra("data", json);
            startActivity(intent);
        } else {
            inputBillTotal.setError("You need to enter a bill total");
        }
    }
}