import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tailwind',
  templateUrl: './tailwind.component.html',
  styleUrls: ['./tailwind.component.css'],
})
export class TailwindComponent implements OnInit {
  isChannel = true;
  isRuleSet = false;
  isRule = false;
  type = '';
  selectedChannel = '';
  selectedRuleSet = '';
  name = '';
  description = '';
  isUpdate = false;

  channelList = [
    {
      name: 'ChannelA',
      description: 'Test ChannelA',
    },
    {
      name: 'ChannelB',
      description: 'Test ChannelB',
    },
  ];

  ruleSetlList: any = [
    {
      name: 'RuleSetA',
      description: 'Test RuleSetA',
      channelName: 'ChannelA',
    },
  ];
  rulelList: any = [
    {
      name: 'RuleA',
      description: 'Test RuleA',
      channelName: 'ChannelA',
      ruleSetName: 'RuleSetA',
    },
  ];

  ngOnInit() {
    console.log('teilwind');
  }

  goToChannel() {
    this.isChannel = true;
    this.isRule = false;
    this.isRuleSet = false;
    this.selectedChannel = '';
  }

  goToRuleSet(channel: string) {
    this.selectedChannel = channel;
    this.isRuleSet = true;
    this.isChannel = false;
    this.isRule = false;
    this.selectedRuleSet = '';
  }

  goToRule(ruleSet: any) {
    this.selectedRuleSet = ruleSet;
    this.isRule = true;
    this.isChannel = false;
    this.isRuleSet = false;
  }

  setType(type: string) {
    this.type = type;
  }

  setSelectedChannel(channel: string) {
    this.selectedChannel = channel;
  }

  setSelectedRuleSet(ruleSet: string) {
    this.selectedRuleSet = ruleSet;
  }

  updateData(data: any, type: string) {
    this.isUpdate = true;
    this.name = data.name;
    this.description = data.description;
    this.type = type;
  }

  addData() {
    let isExists = false;
    if (this.type === 'Channel') {
      isExists = this.channelList.some((channel) => channel.name === this.name);
      if (!isExists) {
        const channel = { name: this.name, description: this.description };
        this.channelList.push(channel);
      } else if (this.isUpdate) {
        const channel = { name: this.name, description: this.description };

        this.channelList.forEach((element, index) => {
          if (element.name === this.name) {
            this.channelList[index] = channel;
          }
        });
      }
    } else if (this.type === 'RuleSet') {
      isExists = this.ruleSetlList.some(
        (ruleSet: any) => ruleSet.name === this.name
      );
      if (!isExists) {
        const ruleSet = {
          name: this.name,
          description: this.description,
          channelName: this.selectedChannel,
        };
        this.ruleSetlList.push(ruleSet);
      } else if (this.isUpdate) {
        const ruleSet = {
          name: this.name,
          description: this.description,
          channelName: this.selectedChannel,
        };
        this.ruleSetlList.forEach((element: any, index: any) => {
          if (element.name === this.name) {
            this.ruleSetlList[index] = ruleSet;
          }
        });
      }
    } else if (this.type === 'Rule') {
      isExists = this.rulelList.some((rule: any) => rule.name === this.name);
      if (!isExists) {
        const rule = {
          name: this.name,
          description: this.description,
          channelName: this.selectedChannel,
          ruleSetName: this.selectedRuleSet,
        };
        this.rulelList.push(rule);
      } else if (this.isUpdate) {
        const rule = {
          name: this.name,
          description: this.description,
          channelName: this.selectedChannel,
          ruleSetName: this.selectedRuleSet,
        };
        this.rulelList.forEach((element: any, index: any) => {
          if (element.name === this.name) {
            this.rulelList[index] = rule;
          }
        });
      }
    }

    if (isExists && !this.isUpdate) {
      alert(this.type + ' already exists');
    }
    this.name = '';
    this.description = '';
  }
}
