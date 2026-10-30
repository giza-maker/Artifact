package com.nomli.mvp;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        registerPlugin(NomliBackupPlugin.class);
        registerPlugin(NomliScanPlugin.class);
        registerPlugin(NomliVoicePlugin.class);
        registerPlugin(NomliDevicePlugin.class);
        registerPlugin(NomliRecoveryPlugin.class);
        super.onCreate(savedInstanceState);
    }
}

